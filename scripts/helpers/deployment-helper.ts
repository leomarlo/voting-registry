import hre from "hardhat";
import fs from 'fs';

import {execShellCommand} from './shell'

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

async function deployment(contractName:string, args: Array<any>) : Promise<string>{
    let verbose: boolean = true
    const [ALICE] = await hre.ethers.getSigners()
    const Nick = await hre.ethers.getContractFactory(contractName);
    const nick = await Nick.connect(ALICE).deploy(...args);
    if (verbose){
        console.log('\nDeployment Message')
        console.log(nick)
        console.log('\nEnd of Deployment Message.\n')
    }
    let deploymentTx = await nick.deployed()
    if (verbose){
        console.log('\nDeployment Receipt')
        console.log(deploymentTx)
        console.log('\nEnd of Deployment Receipt.\n')
    }
    let receipt = await deploymentTx.deployTransaction.wait()
    //console.log(deploymentTx.deployTransaction.data)
    return receipt.contractAddress
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


interface contractPreDeployInfo {
    contractName: string,
    deploymentArguments: Array<any>
}

interface contractInfo extends contractPreDeployInfo {
    contractAddress: string,
}

async function deployAll(contractArgs:Array<contractPreDeployInfo>): Promise<Array<contractInfo>>  {
    let returnInfo: Array<contractInfo> = [];
    for (let i=0; i<contractArgs.length; i++){

        let address = await deployment(contractArgs[i].contractName, contractArgs[i].deploymentArguments) 
        saveDeploymentArguments(contractArgs[i].contractName, contractArgs[i].deploymentArguments)
        returnInfo[i] = {
            ... contractArgs[i],
            contractAddress: address
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


async function voteContractDeploymentStack(withRegistry: boolean): Promise<Array<contractInfo>>  {

    let returnInfo: Array<contractInfo> = []

    let orginalRegistryAddress: string = ""
    if (withRegistry){
        // retrieve old address
        orginalRegistryAddress = retrieveAddressFromRegistryAddressSol()

        // deploy registry
        let registryAddress = await deployment("Registry", [])
        saveDeploymentArguments("Registry", [])
        returnInfo.push({
            contractName: "Registry",
            deploymentArguments: [],
            contractAddress: registryAddress
        });

        // set globalAddress
        setGlobalRegistryAddressAndCompile(registryAddress);

    }

    // deploy Three Voting contracts
    let SimpleMajorityVoteContractName = "SimpleMajorityVote"
    let majorityVoteCategoryId = "0x0000000000000001"
    let deploymentArgs = [majorityVoteCategoryId];
    let address = await deployment(SimpleMajorityVoteContractName, deploymentArgs)
    saveDeploymentArguments(SimpleMajorityVoteContractName, deploymentArgs)
    returnInfo.push({
        contractName: SimpleMajorityVoteContractName,
        deploymentArguments: deploymentArgs,
        contractAddress: address
    });
    
    let SimpleMajorityVoteAndImplementContractName = "SimpleMajorityVoteAndImplement"
    address = await deployment(SimpleMajorityVoteAndImplementContractName, deploymentArgs)
    saveDeploymentArguments(SimpleMajorityVoteAndImplementContractName, deploymentArgs)
    returnInfo.push({
        contractName: SimpleMajorityVoteAndImplementContractName,
        deploymentArguments: deploymentArgs,
        contractAddress: address
    });

    let ThresholdTokenVoteName = "ThresholdTokenVote"
    let tokenThresholdVoteCategoryId = "0x0000000000000002"
    deploymentArgs = [tokenThresholdVoteCategoryId];
    address = await deployment(ThresholdTokenVoteName, deploymentArgs)
    saveDeploymentArguments(ThresholdTokenVoteName, deploymentArgs)
    returnInfo.push({
        contractName: ThresholdTokenVoteName,
        deploymentArguments: deploymentArgs,
        contractAddress: address
    });

    let ThresholdTokenVoteAndImplementName = "ThresholdTokenVoteAndImplement"
    deploymentArgs = [tokenThresholdVoteCategoryId];
    let thresholdVoteContractAddress = await deployment(ThresholdTokenVoteAndImplementName, deploymentArgs)
    saveDeploymentArguments(ThresholdTokenVoteAndImplementName, deploymentArgs)
    returnInfo.push({
        contractName: ThresholdTokenVoteAndImplementName,
        deploymentArguments: deploymentArgs,
        contractAddress: thresholdVoteContractAddress
    });

    // deploy dummy integrator
    let DummyName = "DummyIntegrator"
    deploymentArgs = [thresholdVoteContractAddress];
    address = await deployment(DummyName, deploymentArgs)
    saveDeploymentArguments(DummyName, deploymentArgs)
    returnInfo.push({
        contractName: DummyName,
        deploymentArguments: deploymentArgs,
        contractAddress: address
    });

    if (withRegistry){
        // replace the old registry address and compile
        setGlobalRegistryAddressAndCompile(orginalRegistryAddress);
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
    let registryAddress = await deployment("Registry", [])
    saveDeploymentArguments("Registry", [])
    console.log("registry Address: ", registryAddress)
    addresses.push(registryAddress)

    let voteContractAddress = await deployment("SimpleMajorityVote", ["0x0000000000000001"])
    saveDeploymentArguments("SimpleMajorityVote",  ["0x0000000000000001"])
    addresses.push(voteContractAddress)
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




