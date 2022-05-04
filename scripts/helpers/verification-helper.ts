
const fs = require('fs');
const hre = require('hardhat');
import {execShellCommand} from './shell'
import {delay} from './deployment-helper'




// verify on Etherscan
async function verifyThisContract(contractAddress: string, contractName: string, pathToContract: string, waitingTimeForBlockConfirmations: number) {
  
    let fileName = "deploy-vars-" + contractName + ".js"
    let filePath = `scripts/verification/${hre.network.name}/${fileName}`
    let fullyQualifiedContractName = pathToContract + ":" + contractName;
    let cmdArguments = `--network ${hre.network.name} --contract ${fullyQualifiedContractName} --constructor-args ${filePath} ${contractAddress}`  
    let cmd = "npx hardhat verify " + cmdArguments;
    console.log("\n", cmd, "\n") 
    if (waitingTimeForBlockConfirmations<0){return}
    if (waitingTimeForBlockConfirmations>0){
      await delay(waitingTimeForBlockConfirmations)
    }
    await execShellCommand(cmd);
}

// --contract contracts/Example.sol:ExampleContract

async function verifyAllContracts() {
    let rawdata = fs.readFileSync(`info/${hre.network.name}/contracts.json`);
    let deploymentVariables: Array<any> = JSON.parse(rawdata);
    for (let i=0; i<deploymentVariables.length; i++){
        verifyThisContract(
          deploymentVariables[i].contractAddress,
          deploymentVariables[i].contractName,
          deploymentVariables[i].path,
          0);
    }
}

async function verifyTheseContracts(contracts: Array<string>) {
  // Todo: adjust function to allow for specific contracts to be verified.
  let rawdata = fs.readFileSync(`info/${hre.network.name}/contracts.json`);
  let deploymentVariables: Array<any> = JSON.parse(rawdata);
  for (let i=0; i<deploymentVariables.length; i++){
      verifyThisContract(
        deploymentVariables[i].contractAddress,
        deploymentVariables[i].contractName,
        deploymentVariables[i].path,
        0);
  }

}

export {
  verifyThisContract,
  verifyTheseContracts,
  verifyAllContracts
}


