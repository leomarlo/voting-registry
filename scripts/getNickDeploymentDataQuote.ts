import {getTxDataAndPrice, unsignedTxAndPrice} from './helpers/nicks-method'
import hre from 'hardhat'

getTxDataAndPrice(
    "VotingRegistry",
    [],
    "50")
    .then((txAndPrice: unsignedTxAndPrice) => {
        console.log(txAndPrice)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });