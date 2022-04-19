const { exec } = require('child_process');
const fs = require('fs');
const hre = require('hardhat');


function execShellCommand(cmd: string) {
    return new Promise((resolve, reject) => {
      exec(cmd, { maxBuffer: 1024 * 500 }, (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.warn(error);
        } else if (stdout) {
          console.log(stdout); 
        } else {
          console.log(stderr);
        }
        resolve(stdout ? true : false);
      });
    });
  }

  

// verify on Etherscan
async function verifyThisContract(contractAddress: string, contractName: string) {
    let fileName = "deploy-vars-" + contractName + ".js"
    let filePath = `scripts/verification/${hre.network.name}/${fileName}`
    let cmdArguments = ` --network ${hre.network.name} --constructor-args ${filePath} ${contractAddress}`  
    let cmd = "npx hardhat verify " + cmdArguments;
    console.log(cmd) 
    await execShellCommand(cmd);
}

async function verifyAllContracts() {
    let rawdata = fs.readFileSync(`info/${hre.network.name}/contracts.json`);
    let deploymentVariables: Array<any> = JSON.parse(rawdata);
    for (let i=0; i<deploymentVariables.length; i++){
        verifyThisContract(deploymentVariables[i].contractAddress, deploymentVariables[i].contractName);
    }
}

async function verifyTheseContracts(contracts: Array<string>) {
  // Todo: adjust function to allow for specific contracts to be verified.
  let rawdata = fs.readFileSync(`info/${hre.network.name}/contracts.json`);
  let deploymentVariables: Array<any> = JSON.parse(rawdata);
  for (let i=0; i<deploymentVariables.length; i++){
      verifyThisContract(deploymentVariables[i].contractAddress, deploymentVariables[i].contractName);
  }

}

export {
  verifyThisContract,
  verifyTheseContracts,
  verifyAllContracts
}


