
import hre from 'hardhat'
import * as dotenv from "dotenv";
import Web3 from "web3"
import fs from "fs"
import {saveDeploymentArguments, saveToFile} from "./deployment-helper"
import {verifyThisContract} from "./verification-helper"
dotenv.config();

async function fakeNickDeploy(networkNames: Array<string>): Promise<any>{
    for (let i=0; i<networkNames.length; i++) {
        
    }
    return 0;
}