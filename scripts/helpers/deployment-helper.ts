import hre from "hardhat";
import fs from 'fs';

import {execShellCommand} from './shell'
import {verifyThisContract} from './verification-helper'
import { isBytesLike } from "ethers/lib/utils";

let verificationWaitingTime: number = -1; //15000

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
        exportFile += '\t' + variables[j].toString() + ',\n'
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


async function voteContractDeploymentStack(withRegistry: boolean, verbosity: number): Promise<Array<contractInfo>>  {

    let returnInfo: Array<contractInfo> = []
    let pathToSampleVoteContracts: string = "contracts/samples/"
    let completePathToContract: string;
    let newVotecontract: contractInfo; 

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
        newVotecontract = {
            contractName: "Registry",
            deploymentArguments: [],
            contractAddress: registryAddress}
        returnInfo.push(newVotecontract)
        saveToFile(newVotecontract,`./info/${hre.network.name}/${newVotecontract.contractName}.json`)
        if (hre.network.name!='localhost'){
            completePathToContract = pathToSampleVoteContracts + newVotecontract.contractName + '.sol'
            await verifyThisContract(newVotecontract.contractAddress, newVotecontract.contractName, completePathToContract, verificationWaitingTime)
        }
        if (verbosity>=1){console.log("\nContract Info:", newVotecontract, "\n")}

        // set globalAddress
        await setGlobalRegistryAddressAndCompile(registryAddress);

        // await delay(6000);
        

    }

    // if it doesnt work to deploy all this then set the global address back
    try {
        let onlyUsedVoteContract: boolean = true;
        if (!onlyUsedVoteContract){
            newVotecontract = await registerVoteContract("SimpleMajorityVote", "0x0000000000000001")
            returnInfo.push(newVotecontract);
            saveToFile(newVotecontract,`./info/${hre.network.name}/${newVotecontract.contractName}.json`)
            if (hre.network.name!='localhost'){
                completePathToContract = pathToSampleVoteContracts + newVotecontract.contractName + '.sol'
                await verifyThisContract(newVotecontract.contractAddress, newVotecontract.contractName, completePathToContract, verificationWaitingTime)}
            if (verbosity>=1){console.log("\nContract Info:", newVotecontract, "\n")}
        
        
            newVotecontract = await registerVoteContract("SimpleMajorityVoteAndImplement", "0x0000000000000001")
            returnInfo.push(newVotecontract);
            saveToFile(newVotecontract,`./info/${hre.network.name}/${newVotecontract.contractName}.json`)
            if (hre.network.name!='localhost'){
                completePathToContract = pathToSampleVoteContracts + newVotecontract.contractName + '.sol'
                await verifyThisContract(newVotecontract.contractAddress, newVotecontract.contractName, completePathToContract, verificationWaitingTime)
            }
            if (verbosity>=1){console.log("\nContract Info:", newVotecontract, "\n")}

            newVotecontract = await registerVoteContract("ThresholdTokenVote", "0x0000000000000002")
            returnInfo.push(newVotecontract);
            saveToFile(newVotecontract,`./info/${hre.network.name}/${newVotecontract.contractName}.json`)
            if (hre.network.name!='localhost'){
                completePathToContract = pathToSampleVoteContracts + newVotecontract.contractName + '.sol'
                await verifyThisContract(newVotecontract.contractAddress, newVotecontract.contractName, completePathToContract, verificationWaitingTime)
            }
            if (verbosity>=1){console.log("\nContract Info:", newVotecontract, "\n")}
        }
        newVotecontract = await registerVoteContract("ThresholdTokenVoteAndImplement", "0x0000000000000002")
        returnInfo.push(newVotecontract);
        saveToFile(newVotecontract,`./info/${hre.network.name}/${newVotecontract.contractName}.json`)
        let thresholdVoteContractAddress: string = newVotecontract.contractAddress;
        if (hre.network.name!='localhost'){
            completePathToContract = pathToSampleVoteContracts + newVotecontract.contractName + '.sol'
            await verifyThisContract(newVotecontract.contractAddress, newVotecontract.contractName, completePathToContract, verificationWaitingTime)
        }
        if (verbosity>=1){console.log("\nContract Info:", newVotecontract, "\n")}
    
        // deploy dummy token
        let DummyToken = "DummyERC20"
        let name = "Dummy ERC20 Token"
        let symbol = "DUMMY"
        let deploymentArgs = [name, symbol]
        let registerContract: RegisterVoteContract = {
            shouldBeRegistered: false,
            registrationArgs: []
        }
        let contract: fullContractInfo = await deployment(DummyToken, deploymentArgs, registerContract)
        let dummyTokenAddress: string = contract.contractAddress
        let newDummyToken: contractInfo = {
            contractName: DummyToken,
            deploymentArguments: [`"${name}"`,`"${symbol}"` ],
            contractAddress: contract.contractAddress}
        saveDeploymentArguments(DummyToken, newDummyToken.deploymentArguments)
        returnInfo.push(newDummyToken)
        saveToFile(newDummyToken,`./info/${hre.network.name}/${newDummyToken.contractName}.json`)
        if (hre.network.name!='localhost'){
            let pathToSampleVoteContracts = 'contracts/test/'
            completePathToContract = pathToSampleVoteContracts + newDummyToken.contractName + '.sol'
            await verifyThisContract(newDummyToken.contractAddress, newDummyToken.contractName, completePathToContract, verificationWaitingTime)
        }
        if (verbosity>=1){console.log("\nContract Info:", newDummyToken, "\n")}

        // deploy dummy integrator
        let DummyName = "DummyIntegrator"
        deploymentArgs = [thresholdVoteContractAddress, dummyTokenAddress];
        contract = await deployment(DummyName, deploymentArgs, registerContract)
        let newDummyContract: contractInfo = {
            contractName: DummyName,
            deploymentArguments: [`"${thresholdVoteContractAddress}"`,`"${dummyTokenAddress}"` ],
            contractAddress: contract.contractAddress}
        saveDeploymentArguments(DummyName, newDummyContract.deploymentArguments)
        returnInfo.push(newDummyContract)
        saveToFile(newDummyContract,`./info/${hre.network.name}/${newDummyContract.contractName}.json`)
        if (hre.network.name!='localhost'){
            let pathToSampleVoteContracts = 'contracts/test/'
            completePathToContract = pathToSampleVoteContracts + newDummyContract.contractName + '.sol'
            await verifyThisContract(newDummyContract.contractAddress, newDummyContract.contractName, completePathToContract, verificationWaitingTime)
        }
        if (verbosity>=1){console.log("\nContract Info:", newDummyContract, "\n")}
    
    } catch(err) {
        if (withRegistry){
            // replace the old registry address and compile
            await setGlobalRegistryAddressAndCompile(orginalRegistryAddress);
        }
        console.log("Encountered an Error:", err)
    }
    
    if (withRegistry){
        // replace the old registry address and compile
        await setGlobalRegistryAddressAndCompile(orginalRegistryAddress);
    }

    return returnInfo
}

async function deployVoteContractStackAndSave(withRegistry: boolean, verbosity: number) {
    let returnInfo: Array<contractInfo> = await voteContractDeploymentStack(withRegistry, verbosity)
    saveToFile(returnInfo,`./info/${hre.network.name}/contracts.json`)
    // for (let i=0; i<returnInfo.length; i++){
    //     saveToFile(returnInfo[i],`./info/${hre.network.name}/${returnInfo[i].contractName}.json`)
    // }
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
    delay,
    contractPreDeployInfo
}




