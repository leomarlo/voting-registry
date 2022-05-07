import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
// import "hardhat-docgen"
import '@primitivefi/hardhat-dodoc';
dotenv.config();


interface MyHardhatUserConfig extends HardhatUserConfig {
  // docgen: {
  //   path: string,
  //   clear: boolean,
  //   runOnCompile: boolean,
  // },
  dodoc: {
    runOnCompile: boolean,
    debugMode: boolean,
    outputDir: string
    // More options...
  }
}


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

function setAccounts(): Array<string> {
  const array :Array<string> = []
  if (process.env.ALICE_PK !== undefined) {
    array.push(process.env.ALICE_PK)
  } 
  if (process.env.BOB_PK !== undefined) {
    array.push(process.env.BOB_PK)
  } 
  return array;
}

let defaultNetwork: string = "rinkeby"
const config: MyHardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: defaultNetwork,
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: setAccounts(),
    },
    localhost: {
      url: process.env.LOCALHOST + ":" + process.env.PORT,
      accounts: setAccounts(),
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_ENDPOINT || "",
      accounts: setAccounts(),
    },
    ropsten: {
      url: process.env.ROPSTEN_RPC_ENDPOINT || "",
      accounts: setAccounts(),
    },
    kovan: {
      url: process.env.KOVAN_RPC_ENDPOINT || "",
      accounts: setAccounts(),
    },
    goerli: {
      url: process.env.GOERLI_RPC_ENDPOINT || "",
      accounts: setAccounts(),
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: defaultNetwork=="mumbai"? process.env.POLYGONSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
  },
  // docgen: {
  //   path: './docs',
  //   clear: true,
  //   runOnCompile: true,
  // }
  dodoc: {
    runOnCompile: true,
    debugMode: true,
    outputDir: "dodocs"
    // More options...
  }
};

export default config;
