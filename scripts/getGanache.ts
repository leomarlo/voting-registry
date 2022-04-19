import hre from 'hardhat'
import * as dotenv from "dotenv";
dotenv.config();
let hundredETH = "100000000000000000000"
console.log(`ganache-cli --account="0x${process.env.ALICE_PK},${hundredETH}"`)