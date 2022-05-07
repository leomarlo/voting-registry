/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DummyERC20,
  DummyERC20Interface,
} from "../../../../contracts/test/DummyERC20.sol/DummyERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "freeMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isDummy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200192d3803806200192d8339818101604052810190620000379190620001b2565b818181600390805190602001906200005192919062000090565b5080600490805190602001906200006a92919062000090565b5050506001600560006101000a81548160ff021916908315150217905550505062000395565b8280546200009e90620002ba565b90600052602060002090601f016020900481019282620000c257600085556200010e565b82601f10620000dd57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010d578251825591602001919060010190620000f0565b5b5090506200011d919062000121565b5090565b5b808211156200013c57600081600090555060010162000122565b5090565b60006200015762000151846200024e565b62000225565b9050828152602081018484840111156200017057600080fd5b6200017d84828562000284565b509392505050565b600082601f8301126200019757600080fd5b8151620001a984826020860162000140565b91505092915050565b60008060408385031215620001c657600080fd5b600083015167ffffffffffffffff811115620001e157600080fd5b620001ef8582860162000185565b925050602083015167ffffffffffffffff8111156200020d57600080fd5b6200021b8582860162000185565b9150509250929050565b60006200023162000244565b90506200023f8282620002f0565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026c576200026b62000355565b5b620002778262000384565b9050602081019050919050565b60005b83811015620002a457808201518184015260208101905062000287565b83811115620002b4576000848401525b50505050565b60006002820490506001821680620002d357607f821691505b60208210811415620002ea57620002e962000326565b5b50919050565b620002fb8262000384565b810181811067ffffffffffffffff821117156200031d576200031c62000355565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61158880620003a56000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806364ec3f0c1161008c57806395d89b411161006657806395d89b4114610228578063a457c2d714610246578063a9059cbb14610276578063dd62ed3e146102a6576100cf565b806364ec3f0c146101be57806370a08231146101da5780637992653c1461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d6565b6040516100e99190610fbc565b60405180910390f35b61010c60048036038101906101079190610d9b565b610368565b6040516101199190610fa1565b60405180910390f35b61012a61038b565b60405161013791906110fe565b60405180910390f35b61015a60048036038101906101559190610d4c565b610395565b6040516101679190610fa1565b60405180910390f35b6101786103c4565b6040516101859190611119565b60405180910390f35b6101a860048036038101906101a39190610d9b565b6103cd565b6040516101b59190610fa1565b60405180910390f35b6101d860048036038101906101d39190610dd7565b610404565b005b6101f460048036038101906101ef9190610ce7565b610465565b60405161020191906110fe565b60405180910390f35b6102126104ad565b60405161021f9190610fa1565b60405180910390f35b6102306104c0565b60405161023d9190610fbc565b60405180910390f35b610260600480360381019061025b9190610d9b565b610552565b60405161026d9190610fa1565b60405180910390f35b610290600480360381019061028b9190610d9b565b6105c9565b60405161029d9190610fa1565b60405180910390f35b6102c060048036038101906102bb9190610d10565b6105ec565b6040516102cd91906110fe565b60405180910390f35b6060600380546102e59061122e565b80601f01602080910402602001604051908101604052809291908181526020018280546103119061122e565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b600080610373610673565b905061038081858561067b565b600191505092915050565b6000600254905090565b6000806103a0610673565b90506103ad858285610846565b6103b88585856108d2565b60019150509392505050565b60006012905090565b6000806103d8610673565b90506103f98185856103ea85896105ec565b6103f49190611150565b61067b565b600191505092915050565b61040e3382610b53565b683635c9adc5dea0000061042133610465565b1115610462576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104599061105e565b60405180910390fd5b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900460ff1681565b6060600480546104cf9061122e565b80601f01602080910402602001604051908101604052809291908181526020018280546104fb9061122e565b80156105485780601f1061051d57610100808354040283529160200191610548565b820191906000526020600020905b81548152906001019060200180831161052b57829003601f168201915b5050505050905090565b60008061055d610673565b9050600061056b82866105ec565b9050838110156105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a7906110be565b60405180910390fd5b6105bd828686840361067b565b60019250505092915050565b6000806105d4610673565b90506105e18185856108d2565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e29061109e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075290610ffe565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161083991906110fe565b60405180910390a3505050565b600061085284846105ec565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108cc57818110156108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b59061101e565b60405180910390fd5b6108cb848484840361067b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610942576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109399061107e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a990610fde565b60405180910390fd5b6109bd838383610cb3565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3a9061103e565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ad69190611150565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b3a91906110fe565b60405180910390a3610b4d848484610cb8565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bba906110de565b60405180910390fd5b610bcf60008383610cb3565b8060026000828254610be19190611150565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c369190611150565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c9b91906110fe565b60405180910390a3610caf60008383610cb8565b5050565b505050565b505050565b600081359050610ccc81611524565b92915050565b600081359050610ce18161153b565b92915050565b600060208284031215610cf957600080fd5b6000610d0784828501610cbd565b91505092915050565b60008060408385031215610d2357600080fd5b6000610d3185828601610cbd565b9250506020610d4285828601610cbd565b9150509250929050565b600080600060608486031215610d6157600080fd5b6000610d6f86828701610cbd565b9350506020610d8086828701610cbd565b9250506040610d9186828701610cd2565b9150509250925092565b60008060408385031215610dae57600080fd5b6000610dbc85828601610cbd565b9250506020610dcd85828601610cd2565b9150509250929050565b600060208284031215610de957600080fd5b6000610df784828501610cd2565b91505092915050565b610e09816111b8565b82525050565b6000610e1a82611134565b610e24818561113f565b9350610e348185602086016111fb565b610e3d816112be565b840191505092915050565b6000610e5560238361113f565b9150610e60826112cf565b604082019050919050565b6000610e7860228361113f565b9150610e838261131e565b604082019050919050565b6000610e9b601d8361113f565b9150610ea68261136d565b602082019050919050565b6000610ebe60268361113f565b9150610ec982611396565b604082019050919050565b6000610ee160208361113f565b9150610eec826113e5565b602082019050919050565b6000610f0460258361113f565b9150610f0f8261140e565b604082019050919050565b6000610f2760248361113f565b9150610f328261145d565b604082019050919050565b6000610f4a60258361113f565b9150610f55826114ac565b604082019050919050565b6000610f6d601f8361113f565b9150610f78826114fb565b602082019050919050565b610f8c816111e4565b82525050565b610f9b816111ee565b82525050565b6000602082019050610fb66000830184610e00565b92915050565b60006020820190508181036000830152610fd68184610e0f565b905092915050565b60006020820190508181036000830152610ff781610e48565b9050919050565b6000602082019050818103600083015261101781610e6b565b9050919050565b6000602082019050818103600083015261103781610e8e565b9050919050565b6000602082019050818103600083015261105781610eb1565b9050919050565b6000602082019050818103600083015261107781610ed4565b9050919050565b6000602082019050818103600083015261109781610ef7565b9050919050565b600060208201905081810360008301526110b781610f1a565b9050919050565b600060208201905081810360008301526110d781610f3d565b9050919050565b600060208201905081810360008301526110f781610f60565b9050919050565b60006020820190506111136000830184610f83565b92915050565b600060208201905061112e6000830184610f92565b92915050565b600081519050919050565b600082825260208201905092915050565b600061115b826111e4565b9150611166836111e4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561119b5761119a611260565b5b828201905092915050565b60006111b1826111c4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156112195780820151818401526020810190506111fe565b83811115611228576000848401525b50505050565b6000600282049050600182168061124657607f821691505b6020821081141561125a5761125961128f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f6d6179206e6f74206d696e74206265796f6e6420313030302044756d6d696573600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61152d816111a6565b811461153857600080fd5b50565b611544816111e4565b811461154f57600080fd5b5056fea2646970667358221220f616a88b1a6c31d63f4455d98e2debc398179485522153d6ce2437e3e296b4d264736f6c63430008040033";

type DummyERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyERC20__factory extends ContractFactory {
  constructor(...args: DummyERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DummyERC20> {
    return super.deploy(name, symbol, overrides || {}) as Promise<DummyERC20>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): DummyERC20 {
    return super.attach(address) as DummyERC20;
  }
  override connect(signer: Signer): DummyERC20__factory {
    return super.connect(signer) as DummyERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyERC20Interface {
    return new utils.Interface(_abi) as DummyERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyERC20 {
    return new Contract(address, _abi, signerOrProvider) as DummyERC20;
  }
}
