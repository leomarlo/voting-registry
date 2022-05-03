import hre from "hardhat";
import fs from 'fs';

import {execShellCommand} from './shell'
import { isBytesLike } from "ethers/lib/utils";


interface contractPreDeployInfo {
    contractName: string,
    deploymentArguments: Array<any>
}

interface contractInfo extends contractPreDeployInfo {
    contractAddress: string,
}

interface fullContractInfo extends contractInfo {
    contract: Object,
    receipt: Object
}

function delay(miliseconds: number){
    return new Promise(function(resolve){
        setTimeout(resolve,miliseconds);
    });
  }

function saveToFile(obj : Object, name: string) {
    var jsonContent = JSON.stringify(obj, null, 2);
    // console.log(jsonContent);
    
    fs.writeFile(name, jsonContent, 'utf8', function (err: any) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    
        console.log("JSON file has been saved.");
    });
  }

interface RegisterVoteContract {
    shouldBeRegistered: boolean,
    registrationArgs: Array<string>
}

async function deployment(contractName:string, args: Array<any>, registerContract: RegisterVoteContract) : Promise<fullContractInfo>{
    const [ALICE] = await hre.ethers.getSigners()
    const Contract = await hre.ethers.getContractFactory(contractName);
    const contract = await Contract.connect(ALICE).deploy(...args);
    let deploymentTx = await contract.deployed()
    let receipt = await deploymentTx.deployTransaction.wait()
    //console.log(deploymentTx.deployTransaction.data)
    let returnObject :fullContractInfo = {
        contractName: contractName,
        contractAddress: receipt.contractAddress,
        deploymentArguments: args,
        contract: contract,
        receipt: receipt
    }
    if (registerContract.shouldBeRegistered) {
        let registration = await contract.register(...registerContract.registrationArgs)
    }
    return returnObject
}

function saveDeploymentArguments(contractName: string, variables: Array<any>) {
    let exportFile: string = 'module.exports = [\n'
    for (let j=0; j<variables.length; j++ ){
        exportFile += "\t" + variables[j].toString() + ",\n"
    }
    exportFile += ']'
    let fileName = "deploy-vars-" + contractName + ".js"
    fs.writeFileSync(`scripts/verification/${hre.network.name}/${fileName}`, exportFile)
}


async function deployAll(contractArgs:Array<contractPreDeployInfo>): Promise<Array<contractInfo>>  {
    let returnInfo: Array<contractInfo> = [];
    for (let i=0; i<contractArgs.length; i++){
        let registerContract: RegisterVoteContract = {
            shouldBeRegistered: false,
            registrationArgs: []
        }
        let contract: fullContractInfo = await deployment(
            contractArgs[i].contractName,
            contractArgs[i].deploymentArguments,
            registerContract) 
        saveDeploymentArguments(contractArgs[i].contractName, contractArgs[i].deploymentArguments)
        returnInfo[i] = {
            ... contractArgs[i],
            contractAddress: contract.contractAddress
        }
    }
    return returnInfo
}

async function deployAllAndSaveAll(contractArgs:Array<contractPreDeployInfo>) {
    let returnInfo: Array<contractInfo> = await deployAll(contractArgs)
    saveToFile(returnInfo,`./info/${hre.network.name}/contracts.json`)
    for (let i=0; i<returnInfo.length; i++){
        saveToFile(returnInfo[i],`./info/${hre.network.name}/${returnInfo[i].contractName}.json`)
    }
}


function retrieveAddressFromRegistryAddressSol(): string{
    let rawdata: any = fs.readFileSync(`contracts/registry/RegistryAddress.sol`)
    // var textByLine = rawdata.split("\n")
    let firstline: Array<any> = rawdata.toString('utf8').split("\n");
    return firstline[3].slice(28,70)
}

async function setGlobalRegistryAddressAndCompile(address: string) {
    let registryAddressSol = `//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.4;\n\naddress constant REGISTRY = ${address};\n`
    fs.writeFileSync(`contracts/registry/RegistryAddress.sol`, registryAddressSol);
    let res = await execShellCommand("npx hardhat compile");
    console.log(res);
}

async function registerVoteContract(contractName: string, categoryId: string): Promise<contractInfo> {
    // deploy Three Voting contracts
    let deploymentArgs : Array<string> = [];
    let registerContract: RegisterVoteContract = {
        shouldBeRegistered: true,
        registrationArgs: [categoryId]
    }
    let contract: fullContractInfo = await deployment(
        contractName,
        deploymentArgs,
        registerContract)
    saveDeploymentArguments(contractName, deploymentArgs)
    return {
        contractName: contractName,
        deploymentArguments: deploymentArgs,
        contractAddress: contract.contractAddress
    }
}


async function voteContractDeploymentStack(withRegistry: boolean): Promise<Array<contractInfo>>  {

    let returnInfo: Array<contractInfo> = []

    let orginalRegistryAddress: string = ""
    if (withRegistry){
        // retrieve old address
        orginalRegistryAddress = retrieveAddressFromRegistryAddressSol()

        // deploy registry (need to be registered itself)
        let registerContract: RegisterVoteContract = {
            shouldBeRegistered: false,
            registrationArgs: []
        }
        let contract: fullContractInfo = await deployment(
            "Registry",
            [],
            registerContract)
        let registryAddress = contract.contractAddress
        saveDeploymentArguments("Registry", [])
        returnInfo.push({
            contractName: "Registry",
            deploymentArguments: [],
            contractAddress: registryAddress
        });

        // set globalAddress
        await setGlobalRegistryAddressAndCompile(registryAddress);

        // await delay(6000);
        

    }

    let newVotecontract: contractInfo; 

    newVotecontract = await registerVoteContract("SimpleMajorityVote", "0x0000000000000001")
    returnInfo.push(newVotecontract);
    newVotecontract = await registerVoteContract("SimpleMajorityVoteAndImplement", "0x0000000000000001")
    returnInfo.push(newVotecontract);
    newVotecontract = await registerVoteContract("ThresholdTokenVote", "0x0000000000000002")
    returnInfo.push(newVotecontract);
    newVotecontract = await registerVoteContract("ThresholdTokenVoteAndImplement", "0x0000000000000002")
    returnInfo.push(newVotecontract);
    let thresholdVoteContractAddress: string = newVotecontract.contractAddress;
   

    // deploy dummy integrator
    let DummyName = "DummyIntegrator"
    let deploymentArgs = [thresholdVoteContractAddress];
    let registerContract: RegisterVoteContract = {
        shouldBeRegistered: false,
        registrationArgs: []
    }
    let contract: fullContractInfo = await deployment(DummyName, deploymentArgs, registerContract)
    saveDeploymentArguments(DummyName, deploymentArgs)
    returnInfo.push({
        contractName: DummyName,
        deploymentArguments: deploymentArgs,
        contractAddress: contract.contractAddress
    });

    if (withRegistry){
        // replace the old registry address and compile
        await setGlobalRegistryAddressAndCompile(orginalRegistryAddress);
    }

    return returnInfo
}

async function deployVoteContractStackAndSave(withRegistry: boolean) {
    let returnInfo: Array<contractInfo> = await voteContractDeploymentStack(withRegistry)
    saveToFile(returnInfo,`./info/${hre.network.name}/contracts.json`)
    for (let i=0; i<returnInfo.length; i++){
        saveToFile(returnInfo[i],`./info/${hre.network.name}/${returnInfo[i].contractName}.json`)
    }
}

async function deployRegistry() : Promise<Array<string>> {
    let addresses : Array<string> = []
    let registerContract: RegisterVoteContract = {
        shouldBeRegistered: false,
        registrationArgs: []
    }
    let contract: fullContractInfo = await deployment("Registry", [], registerContract)
    saveDeploymentArguments("Registry", [])
    console.log("registry Address: ", contract.contractAddress)
    addresses.push(contract.contractAddress)

    let verbose: boolean = true
    const [ALICE] = await hre.ethers.getSigners()
    const MajorityVote = await hre.ethers.getContractFactory("SimpleMajorityVote");
    const _categoryId = "0x0000000000000001"
    const isByteLike = isBytesLike(_categoryId)
    console.log("isByteLike: ", isByteLike)

    const majorityVote = await MajorityVote.connect(ALICE).deploy(); 
    if (verbose){
        console.log("majorityVote: ", majorityVote.deployTransaction)
    }
    addresses.push(majorityVote.address)
    return addresses
}

export {
    deployAllAndSaveAll,
    saveDeploymentArguments,
    deployVoteContractStackAndSave,
    voteContractDeploymentStack,
    setGlobalRegistryAddressAndCompile,
    retrieveAddressFromRegistryAddressSol,
    deployRegistry,
    saveToFile,
    contractPreDeployInfo
}




