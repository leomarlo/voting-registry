
import hre from 'hardhat'
import * as dotenv from "dotenv";
import Web3 from "web3"
import fs from "fs"
import {saveDeploymentArguments, saveToFile} from "./deployment-helper"
import {verifyThisContract} from "./verification-helper"
dotenv.config();

interface unsignedWeb3Tx {
    gas: string,
    gasPrice: string,
    nonce: number | undefined,
    to: string | undefined,
    data: string,
    value: string,
    chain: string | undefined,
    hardfork: string
}

interface unsignedTxAndPrice {
    data: unsignedWeb3Tx
    priceInEth: string
}

interface txSuccess {
    contractAddress: string,
    successFlag: boolean
}

let VERBOSITY = 1;

async function printAccountBalance(provider: any, account: string | undefined, isFake: boolean) {
    let accountAddressString: string = account === undefined ? '': account
    let isfakeString : string = isFake? 'fake' : 'EOA or contract'
    let balance = (await provider.getBalance(accountAddressString)).toString()
    console.log(`The balance of the ${isfakeString} account ${accountAddressString} is ${balance}\n`)
    console.log('Transaction is on:', provider.network)
}


async function nickDeploy(networkName: string, txDataWeb3: unsignedWeb3Tx, priceInETH: string): Promise<txSuccess>{

    let alice_pk = getAlicePK()
    let provider = new hre.ethers.providers.JsonRpcProvider(getProviderURL(networkName))
    let web3 = new Web3(provider.connection.url);
    let res = await web3.eth.accounts.signTransaction(txDataWeb3, alice_pk);
    let rawRLP: any = res.rawTransaction
    let decodedTx = hre.ethers.utils.RLP.decode(rawRLP)
    decodedTx[decodedTx.length - 3] = '0x1b'
    decodedTx[decodedTx.length - 2] = '0x1820182018201820182018201820182018201820182018201820182018201820'
    decodedTx[decodedTx.length - 1] = '0x1820182018201820182018201820182018201820182018201820182018201820'
    let alteredDecodedTx = hre.ethers.utils.RLP.encode(decodedTx)
    let fakeAccount = web3.eth.accounts.recoverTransaction(alteredDecodedTx);
    let alice_wallet: any = getAliceWallet(provider)
    if (VERBOSITY>=1){
        await printAccountBalance(provider, fakeAccount, true)
        await printAccountBalance(provider, alice_wallet.address, false)
        console.log(`Alice needs to pay ${priceInETH} in ETH to the fake account for it to cover deployment costs.`)
    }
    const tx_sent = await alice_wallet.sendTransaction({
        to: fakeAccount,
        value: hre.ethers.utils.parseEther(priceInETH)
    });
    let receipt = await tx_sent.wait()
    if (VERBOSITY>=1){
        console.log('funding the fake account with ETH:', tx_sent)
        await printAccountBalance(provider, fakeAccount, true)
        await printAccountBalance(provider, alice_wallet.address, false)
        console.log('These were the balances of the fake account and of Alice.')
    }
    try {
        let send = await web3.eth.sendSignedTransaction(alteredDecodedTx)
        if (VERBOSITY>=1){
            await printAccountBalance(provider, fakeAccount, true)
            await printAccountBalance(provider, send.contractAddress, false)
        }
        return {
            contractAddress: send.contractAddress===undefined? '' : send.contractAddress,
            successFlag: true}

    } catch(err: any) {
        if (VERBOSITY>=1) console.log(err.toString())
        return {
            contractAddress: err.toString(),
            successFlag: false}
    }
    
}


async function getTxDataAndPrice(contractName: string, args: Array<any>, gasPriceInGwei: string) :Promise<unsignedTxAndPrice> {

    let provider = new hre.ethers.providers.JsonRpcProvider(getProviderURL('localhost'))
    let aliceWallet = getAliceWallet(provider)
    let bytecode = (await hre.artifacts.readArtifact(contractName)).bytecode
    let contractAbi = (await hre.artifacts.readArtifact(contractName)).abi
    let contractInterface = new hre.ethers.utils.Interface( contractAbi )
    let contract = new hre.ethers.ContractFactory( contractInterface , bytecode , aliceWallet )

    let options = { gasPrice: hre.ethers.utils.parseUnits(gasPriceInGwei, "gwei")}
    let instance = await contract.deploy(...args, options)
    let deploymentTx = await instance.deployed()
    let receipt = await deploymentTx.deployTransaction.wait()
    console.log("\nLocalhost deployment transaction:\n", deploymentTx.deployTransaction, '\n')
    deploymentTx.deployTransaction.gasLimit.toHexString()

    let txData : unsignedWeb3Tx = {
        gasPrice: options.gasPrice.toHexString(),
        gas: deploymentTx.deployTransaction.gasLimit.toHexString(),
        to: undefined,
        value: '0x00',
        nonce: 0,
        data: deploymentTx.deployTransaction.data,
        hardfork: 'homestead',
        chain: 'rinkeby'
      }
    let priceInEth = hre.ethers.utils.formatUnits(options.gasPrice.mul(deploymentTx.deployTransaction.gasLimit))
    // console.log('priceInEth', priceInEth)
    return {"data": txData, "priceInEth": priceInEth}
}

async function getQuoteAndNickDeploy(networkName: string, contractName: string, args: Array<any>, gasPriceInGwei: string): Promise<txSuccess> {
    let txAndPrice: unsignedTxAndPrice = await getTxDataAndPrice(contractName, args, gasPriceInGwei)
    let contractDeploymentInfo: txSuccess = await nickDeploy(networkName, txAndPrice.data, txAndPrice.priceInEth)
    if (contractDeploymentInfo.successFlag){
        saveToFile({
            contractName,
            deploymentArguments: args,
            contractAddress: contractDeploymentInfo.contractAddress},
            `info/${hre.network.name}/${contractName}.json`)
        saveDeploymentArguments(contractName, args)
    }
    return contractDeploymentInfo
}

async function getQuoteNickDeployAndVerify(networkName: string, contractName: string, contractPath: string, args: Array<any>, gasPriceInGwei: string) : Promise<txSuccess> {
    let contractDeploymentInfo: txSuccess = await getQuoteAndNickDeploy(networkName, contractName, args, gasPriceInGwei)
    if (contractDeploymentInfo.successFlag && networkName!="localhost"){
        verifyThisContract(contractDeploymentInfo.contractAddress, contractName, contractPath, 0)
    }
    return contractDeploymentInfo;
}

// --rpc.allow-unprotected-txs

function getProviderURL(networkName: string) : string {
    if (networkName=='localhost') {
        let localhostProviderURL = process.env.LOCALHOST===undefined? 'http://127.0.0.1' : process.env.LOCALHOST
        return localhostProviderURL + ':' + (process.env.PORT===undefined? '8545' : process.env.PORT)
    } else if (networkName=='rinkeby') {
        return process.env.RINKEBY_URL===undefined? '0x' : process.env.RINKEBY_URL
    } else if (networkName=='mumbai') {
        return process.env.MUMBAI_RPC_ENDPOINT===undefined? '0x' : process.env.MUMBAI_RPC_ENDPOINT
    } else {
        return ''
    }
}

function getAlicePK() : string {
    return process.env.ALICE_PK===undefined? '0x' : process.env.ALICE_PK
}

function getAliceWallet(provider: any) : any {
    return (new hre.ethers.Wallet(Buffer.from(getAlicePK(), 'hex'), provider))
}


export {
    unsignedTxAndPrice,
    txSuccess,
    getTxDataAndPrice,
    nickDeploy,
    getQuoteAndNickDeploy,
    getQuoteNickDeployAndVerify,
    getAliceWallet,
    getAlicePK,
    getProviderURL
}

// getTxDataAndPrice("VotingRegistry", [], "120")

