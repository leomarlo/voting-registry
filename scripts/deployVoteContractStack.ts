import hre from 'hardhat'
import {voteContractDeploymentStack, deployVoteContractStackAndSave} from './helpers/deployment-helper'

let withRegistry: boolean = true;
deployVoteContractStackAndSave(withRegistry)
    .then((res)=>{
        console.log("successful:", res)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });

