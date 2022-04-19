// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// import hre from "hardhat";
import {ethers} from "hardhat";
import Web3 from "web3"
import {Transaction} from 'ethereumjs-tx'
import {bufferToHex, pubToAddress, ecrecover, sha256} from 'ethereumjs-util'
import * as dotenv from "dotenv";
dotenv.config();

var web3 = new Web3(ethers.provider.connection.url);

// console.log(ethers.provider.connection.url)

let EtherTimes100 = "100000000000000000000"
let GweiTimes100 = ethers.utils.parseUnits("110", "gwei")
let GasLimit = ethers.utils.parseUnits("921295", "wei")
let ZeroBigNumber = ethers.utils.parseUnits("0", "wei")

let DeploymentByteCode = '0x608060405234801561001057600080fd5b50610d80600081905550610205806100296000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630dbe671f14610046578063d09de08a14610064578063ea3d508a1461006e575b600080fd5b61004e61008c565b60405161005b91906100f9565b60405180910390f35b61006c610092565b005b6100766100ad565b60405161008391906100de565b60405180910390f35b60005481565b60016000808282546100a49190610114565b92505081905550565b600160009054906101000a900460e01b81565b6100c98161016a565b82525050565b6100d881610196565b82525050565b60006020820190506100f360008301846100c0565b92915050565b600060208201905061010e60008301846100cf565b92915050565b600061011f82610196565b915061012a83610196565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561015f5761015e6101a0565b5b828201905092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220380d6e75bedc24d2697a13bd97027315d6d9fd23daf00001ea385e960b3d517564736f6c63430008040033'
console.log(`ganache-cli --account="0x${process.env.ALICE_PK},${EtherTimes100}"`)

async function deploymentRaw() {

  const [ALICE] = await ethers.getSigners()
  let privateKeyString = process.env.ALICE_PK!==undefined ? process.env.ALICE_PK : "..." 
  const privateKey = Buffer.from(
    privateKeyString,
    'hex',
  )

  let r = 'a0de33f4f398c1f5f9bce68825cbc1afd8078ee95bba17f5ba9e8ed046ef7de4'
  let s = '34290374099df8f0b7f1702de210094fef777428563814560202ec8aff531016'

  const expandedSig = {
    r: '0x' + r,
    s: '0x' + s,
    v: 28
    // r: '0xa16051f1dfb4083817eebaeb47811bbbbce3a54f3aa62564a100bc7a45ef2175',
    // s: '0x6fe56b3aa684762fe821eda45f028cf8dceaa6fa58e5a14c09b37f0c96c8b444',
    // v: 2710,  // originally 2710, i.e. {0,1} + CHAIN_ID * 2 + 35
  }
  const signature = ethers.utils.joinSignature(expandedSig)
  
  const txCount = await ethers.provider.getTransactionCount(ALICE.address);
  // let aliceNonce = ethers.utils.hexlify(txCount)

  let txData = {
    gasPrice: GweiTimes100.toHexString(),
    gasLimit: GasLimit.toHexString(),
    to: undefined,
    value: ZeroBigNumber.toHexString(),
    nonce: txCount,
    data: DeploymentByteCode
  }

  let signedTxData = {
    ...txData,
    ...expandedSig
  }

  console.log(signedTxData)
  // const rsTx = await ethers.utils.resolveProperties(signedTxData)
  // const raw = ethers.utils.serializeTransaction(rsTx)
  // console.log(raw)
  // const RLPdecoded = ethers.utils.RLP.decode(raw)
  // console.log(RLPdecoded)

  // const msgHash = ethers.utils.keccak256(raw) // as specified by ECDSA
  // const msgBytes = ethers.utils.arrayify(msgHash) // create binary hash

  const tx = new Transaction(signedTxData,  {hardfork: 'homestead' });
  const unsignedTx = new Transaction(txData,  {hardfork: 'homestead' });
  const serializedTx = tx.serialize()
  console.log(unsignedTx)
  const unsignedTxHash = ethers.utils.keccak256(Buffer.from(unsignedTx.serialize().toString('hex'), 'hex'))
  let ethersSignature = await ALICE.signMessage(unsignedTxHash)
  
  console.log('my own signedTX Hash', ethersSignature, ethersSignature.length)
  console.log('r:', ethersSignature.slice(2,66),'\ns:', ethersSignature.slice(66,130), '\nv:', ethersSignature.slice(130,132))
  // ethersSignature
  let serializedTxToHexNoPrefix = tx.serialize().toString('hex')
  var serializedTxToHex = '0x' + serializedTxToHexNoPrefix;
  let bufferedtxNoPrefix = Buffer.from(serializedTxToHexNoPrefix, 'hex')
  // let bufferedtx = Buffer.from(serializedTxToHex, 'hex')
  let txHashComputedNoPrefix = ethers.utils.keccak256(bufferedtxNoPrefix)
  // let txHashComputed = ethers.utils.keccak256(bufferedtx)
  // console.log(bufferedtxNoPrefix)
  // console.log(bufferedtx)
  console.log('txHashComputedNoPrefix', txHashComputedNoPrefix, txHashComputedNoPrefix.slice(2,).length)
  // console.log('txHashComputed', txHashComputed)
  let bufferedMsg = Buffer.from(txHashComputedNoPrefix.slice(2,), 'hex')
  let bufferedUnsignedMsg = Buffer.from(unsignedTxHash.slice(2,), 'hex')
  let bufferedUnsignedMsgWithPrefix = Buffer.from(unsignedTxHash, 'hex')
  console.log('bufferedUnsignedMsg', bufferedUnsignedMsg)
  // const recoverTransaction = ethers.provider.getTransaction( msgHash )
  // console.log(recoverTransaction)
  // const recoveredPubKey = ethers.utils.recoverPublicKey(msgBytes, signature)
  // let prefixedMsg = Buffer.from(serializedTxToHex, "hex")
  // console.log('serializedTxToHex', serializedTxToHex, ' length ', serializedTxToHex.length)

  // const pubKey  = ecrecover(
  //   bufferedUnsignedMsg,
  //   expandedSig.v,
  //   Buffer.from(expandedSig.r, 'hex'),
  //   Buffer.from(expandedSig.s, 'hex'));
  // const addrBuf = pubToAddress(pubKey);
  // const recoveredAddress = bufferToHex(addrBuf);
  // console.log("recoveredAddress", recoveredAddress)
  // try {
  //   let tx = await ethers.provider.sendTransaction( serializedTxToHex )
  //   console.log(tx)
  //   let receipt = await tx.wait()
  //   console.log(receipt)
  //   return receipt.contractAddress
  // } catch (err) {
  //   console.log("fail!! because of ", err)
  //   return "hallo"
  // }
  // return "hallo";
  // return deploymentAddress
}

async function TestDeployment(deploymentAddress: string) {
  const [ALICE] = await ethers.getSigners()
  let nick = await ethers.getContractAt("NicksMethod", deploymentAddress, ALICE)
  let txIncrement = await nick.increment()
  let receiptIncrement = await txIncrement;
  console.log(receiptIncrement)

}

async function sendRawContract () {

  const [ALICE] = await ethers.getSigners()
  let privateKeyString = process.env.ALICE_PK!==undefined ? process.env.ALICE_PK : "..." 
  const privateKey = Buffer.from(
    privateKeyString,
    'hex',
  )

  // const chainId = ethers.provider.network.chainId
  // console.log("chainId", chainId, chainId.toString(16))
  const txCount = await ethers.provider.getTransactionCount(ALICE.address);
  // build the transaction

  const txData = {
    // chainId: '0x539',
    nonce: ethers.utils.hexlify(txCount),
    // to: ethers.constants.AddressZero,
    value: ZeroBigNumber.toHexString(),
    gasPrice: GweiTimes100.toHexString(),
    gasLimit: GasLimit.toHexString(), // something bigger than 0x0e0ecf (= 921295), like '0x0f0ecf'
    // this data I got from the deployment of another contract
    data: DeploymentByteCode
  }
  const rsTx = await ethers.utils.resolveProperties(txData)
  // const raw = ethers.utils.serializeTransaction(rsTx) 
  console.log("rsTx", rsTx)
  // console.log("raw", raw)
  const tx = new Transaction(txData,  {hardfork: 'homestead' });
  // console.log(tx._implementsEIP155())
  // sign the transaction
  tx.sign(privateKey);
  // send the transaction

  const { hash } = await ethers.provider.sendTransaction(
    "0x" + tx.serialize().toString("hex")
  );
  const signedTxData = await ethers.provider.getTransaction(hash)
  console.log("signedTxData", signedTxData)
  let receipt = await ethers.provider.waitForTransaction(hash);
  console.log("receipt", receipt)
  
  return receipt.contractAddress
  
}



async function deployment() {
  const [ALICE] = await ethers.getSigners()
  const Nick = await ethers.getContractFactory("NicksMethod");
  var options = { gasPrice: ethers.utils.parseUnits("110", "gwei")} //, gasLimit: 85000, nonce: 45, value: 0 };
  // var fooPromise = contract.foo(address, options);
  const nick = await Nick.connect(ALICE).deploy(options);

  let depl = await nick.deployed();

  console.log("Deployment transaction ", depl.deployTransaction)
  console.log(`${ALICE.address} deployed the contract to the address ${nick.address}`)
  console.log(`The deployment happened at
               nonce: ${depl.deployTransaction.nonce}
               r: ${depl.deployTransaction.r}
               s: ${depl.deployTransaction.s}
               v: ${depl.deployTransaction.v}
               gasPrice : ${depl.deployTransaction.gasPrice}
               gasLimit : ${depl.deployTransaction.gasLimit}`)

  console.log("gasLimit, ", depl.deployTransaction.gasLimit.toHexString())

  return nick.address
 
}



// deployment()
//   .then((res)=>{
//     TestDeployment(res)
//     .catch((error)=>{
//       console.error(error);
//       process.exitCode = 1;
//     })
//   })
//   .catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// sendRawContract()
// deploymentRaw()
//   .then((res)=>{
//     TestDeployment(res)
//     .catch((error)=>{
//       console.error(error);
//       process.exitCode = 1;
//     })
//   })
//   .catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// deploymentRaw().then(console.log)

// web3.eth.personal.ecRecover(dataThatWasSigned, signature [, callback])

