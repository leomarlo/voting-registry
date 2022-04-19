import {ethers} from 'hardhat'
import Web3 from "web3"
import RLP from 'rlp'
import { arrToBufArr, bufArrToArr } from 'ethereumjs-util'
import {Transaction} from 'ethereumjs-tx'
var web3 = new Web3(ethers.provider.connection.url);

let unsignedTxEntries :Array<string> = ["nonce", "gasPrice", "gasLimit", "recipient", "value", "data"]
let signedTxEntries :Array<string> = unsignedTxEntries.concat(["r", "s", "v"])
let deploymentByteCode = '0x608060405234801561001057600080fd5b50610d80600081905550610205806100296000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630dbe671f14610046578063d09de08a14610064578063ea3d508a1461006e575b600080fd5b61004e61008c565b60405161005b91906100f9565b60405180910390f35b61006c610092565b005b6100766100ad565b60405161008391906100de565b60405180910390f35b60005481565b60016000808282546100a49190610114565b92505081905550565b600160009054906101000a900460e01b81565b6100c98161016a565b82525050565b6100d881610196565b82525050565b60006020820190506100f360008301846100c0565b92915050565b600060208201905061010e60008301846100cf565b92915050565b600061011f82610196565b915061012a83610196565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561015f5761015e6101a0565b5b828201905092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220380d6e75bedc24d2697a13bd97027315d6d9fd23daf00001ea385e960b3d517564736f6c63430008040033'

interface unsignedTx {
    gasPrice: string,
    gasLimit: string,
    recipient: string,
    value: string,
    nonce: string,
    data: string
  }

interface rsvSignature {
    r: string,
    s: string,
    v: string
}

interface signedTx extends unsignedTx, rsvSignature {}

let txData : unsignedTx = {
    gasPrice: '0x199c82cc00',
    gasLimit: '0x0e0ecf',
    recipient: '',
    value: '0x00',
    nonce: '0x00',
    data: deploymentByteCode
  }


function getMessageDigest(txData: unsignedTx | signedTx, signed: boolean): [string, string] {
    let RLPList = []
    if (signed){
        for (let i=0; i<signedTxEntries.length; i++){
            // let field = txEntries[i]
            let field = signedTxEntries[i] as keyof typeof txData;
            if (txData[field]) {
                if (field=='value' && txData[field]=='0x00'){
                    RLPList.push(Buffer.from(''))
                }
                else {
                    RLPList.push(Buffer.from(txData[field].slice(2,), 'hex'))
                }
            } else {
                RLPList.push(Buffer.from(''))
            }
        } 
    } else {
        for (let i=0; i<unsignedTxEntries.length; i++){
            // let field = txEntries[i]
            let field = unsignedTxEntries[i] as keyof typeof txData;
            // RLPList.push(txData[field])
            if (txData[field]) {
                if (field=='value' && txData[field]=='0x00'){
                    RLPList.push(Buffer.from(''))
                }
                else {
                    RLPList.push(Buffer.from(txData[field].slice(2,), 'hex'))
                }
            } else {
                RLPList.push(Buffer.from(''))
            }
        }
    }
    // console.log('RLP:', RLPList)
    // let encoded = ethers.utils.RLP.encode( RLPList ) 
    let encoded = RLP.encode( bufArrToArr(RLPList) ) 
    let encodedString = arrToBufArr(encoded).toString('hex')
    let bufferedEncoded = Buffer.from(encoded)

    // console.log('encoded', encoded)
    // console.log('encodedString', encodedString)
    // console.log('bufferedEncoded', bufferedEncoded)

    return [ethers.utils.keccak256(bufferedEncoded), '0x' + encodedString]
}

type signature = [string, string, string]
async function getSignatureFromUnsignedTransaction(_messageDigest: string) : Promise<signature> {
    const [ALICE] = await ethers.getSigners()
    let ethersSignature = await ALICE.signMessage(Buffer.from(_messageDigest.slice(2,),'hex'))
    // console.log('my own signedTX Hash', ethersSignature, ethersSignature.length)
    // console.log('r:', ethersSignature.slice(2,66),'\ns:', ethersSignature.slice(66,130), '\nv:', parseInt(ethersSignature.slice(130,132), 16))
    // return [ethersSignature.slice(2,66), ethersSignature.slice(66,130),parseInt(ethersSignature.slice(130,132), 16)]
    return [ethersSignature.slice(2,66), ethersSignature.slice(66,130), ethersSignature.slice(130,132)]
}

async function createSignedTransaction(txData: unsignedTx): Promise<Array<any>> {
    let signedFlag: boolean = false
    let [unsignedMessageDigest, serializedUnsignedMsg] = getMessageDigest(txData, signedFlag)
    let txEthereumJsObject = new Transaction(txData, {'hardfork':'homestead'});

    console.log('myOwnSerializedTx:', serializedUnsignedMsg , '\n EthereumJs serialized: ',txEthereumJsObject.serialize().toString('hex'))
    let signature: signature = await getSignatureFromUnsignedTransaction(unsignedMessageDigest)
    let signedTxData : signedTx = {
        ...txData,
        "r": "0x" + signature[0],
        "s": "0x" + signature[1],
        "v": "0x" + signature[2]
    }
    signedFlag = true
    let [txHash, serializedSignedMsg] = getMessageDigest(signedTxData, signedFlag)
    return [serializedSignedMsg, unsignedMessageDigest, txHash, signature]

}

async function sendRawTransaction(txData: unsignedTx) {
    let [serializedSignedMsg, unsignedMessageDigest, txHash] = await createSignedTransaction(txData);
    // console.log(serializedSignedMsg, '\n', unsignedMessageDigest)
    // console.log(ethers.utils.RLP.decode(serializedSignedMsg))
    // web3.eth.getTransaction(txHash)
    //     .then(console.log);
    // let tx = await ethers.provider.sendTransaction(serializedSignedMsg)
    // web3.eth
    //     .sendSignedTransaction(serializedSignedMsg)
    //     .on('receipt', (res)=>{console.log('transaction sent. Receipt: ', res)});
    // console.log(tx)
    // let tx = ethers.utils.parseTransaction(serializedSignedMsg)
    // console.log('parsed tx', tx)
}

// getSignatureFromUnsignedTransaction(getMessageDigest(txData, false)[0])
sendRawTransaction(txData)
    // .then(console.log)
    // .catch(console.log)

// getMessageDigest(txData, false)