import hre from 'hardhat'
import {deployAllAndSaveAll, contractPreDeployInfo} from './helpers/deployment-helper'
import {getQuoteNickDeployAndVerify, txSuccess} from './helpers/nicks-method'

let deployRegistry: boolean = false
// var args = process.argv.slice(2);

let contractArgs:Array<contractPreDeployInfo> = [
    {
        contractName: "Registry",
        deploymentArguments: []
    }
]

if (deployRegistry) {

    getQuoteNickDeployAndVerify(
        hre.network.name,
        "Registry",
        [],
        "50")
    .then((res: txSuccess)=>{
        console.log(res)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
} else {
    deployAllAndSaveAll(contractArgs)
        .then(console.log)
        .catch((error) => {
            console.error(error);
            process.exitCode = 1;
        });
}

// deployAllAndSaveAll(contractArgs)

// console.log(args)