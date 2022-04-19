import hre from 'hardhat'
import {getQuoteNickDeployAndVerify, txSuccess} from './helpers/nicks-method'


getQuoteNickDeployAndVerify(
    hre.network.name,
    "VotingRegistry",
    [],
    "50")
    .then((res: txSuccess)=>{
        console.log(res)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
