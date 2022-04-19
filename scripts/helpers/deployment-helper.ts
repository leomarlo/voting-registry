import hre from "hardhat";
import fs from 'fs';

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
    const [ALICE] = await hre.ethers.getSigners()
    const Nick = await hre.ethers.getContractFactory(contractName);
    const nick = await Nick.connect(ALICE).deploy(...args);
    let deploymentTx = await nick.deployed()
    let receipt = await deploymentTx.deployTransaction.wait()
    console.log(deploymentTx.deployTransaction.data)
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

export {
    deployAllAndSaveAll,
    saveDeploymentArguments,
    saveToFile,
    contractPreDeployInfo
}




