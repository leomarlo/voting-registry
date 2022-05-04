import hre from 'hardhat'
import {voteContractDeploymentStack, deployVoteContractStackAndSave} from './helpers/deployment-helper'

let verbosity: number = 1;
let withRegistry: boolean = false;
if (hre.network.name=='localhost'){withRegistry = true}

deployVoteContractStackAndSave(withRegistry, verbosity)
    .then(()=>{
        console.log("successful.")
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });

