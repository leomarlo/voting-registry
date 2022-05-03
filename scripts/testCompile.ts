import hre from 'hardhat'
import fs from 'fs'
import {deployRegistry} from './helpers/deployment-helper'

// let registryAddress: string = "0xbC9BFE2CA9a27A34Bfc2057b428c7C341a017a2f";
deployRegistry()
    .then((res)=>{
        console.log("successful contract Deployment at: ", res)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });

