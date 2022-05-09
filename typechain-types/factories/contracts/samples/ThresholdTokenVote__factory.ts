/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ThresholdTokenVote,
  ThresholdTokenVoteInterface,
} from "../../../contracts/samples/ThresholdTokenVote";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "AlreadyVoted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bytes8",
        name: "categoryId",
        type: "bytes8",
      },
    ],
    name: "MayOnlyRegisterOnceByDeployer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "StatusPermitsVoting",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "categories",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "votingParams",
        type: "bytes",
      },
    ],
    name: "decodeVotingParams",
    outputs: [
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thresholdInBasisPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "encodeVotingParams",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "getCurrentVoteIndex",
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
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "getCurrentVotingStatus",
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
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "getTotalVotes",
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
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "pro",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "contra",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstain",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "categoryId",
        type: "bytes8",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "result",
    outputs: [
      {
        internalType: "bytes32",
        name: "votingResult",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "votingParams",
        type: "bytes",
      },
    ],
    name: "start",
    outputs: [
      {
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "statusPermitsVoting",
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
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "option",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ff6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634de8737c1161008c578063b7c1122711610066578063b7c1122714610273578063c6cdbe5e146102a3578063c76e6196146102d3578063ff98109914610303576100cf565b80634de8737c146101e05780634f08c4ce1461021057806379b8484914610243576100cf565b806301ffc9a7146100d457806307a1018e146101045780632ce35e11146101345780633c594059146101645780634279182b14610194578063475a7c49146101b0575b600080fd5b6100ee60048036038101906100e99190611787565b610335565b6040516100fb9190611a95565b60405180910390f35b61011e600480360381019061011991906117d9565b6103af565b60405161012b9190611b28565b60405180910390f35b61014e6004803603810190610149919061181a565b6104b0565b60405161015b9190611b28565b60405180910390f35b61017e6004803603810190610179919061181a565b61050d565b60405161018b9190611ab0565b60405180910390f35b6101ae60048036038101906101a991906117b0565b61056d565b005b6101ca60048036038101906101c5919061175e565b6106ab565b6040516101d79190611b28565b60405180910390f35b6101fa60048036038101906101f5919061186c565b6106f4565b6040516102079190611b28565b60405180910390f35b61022a600480360381019061022591906117d9565b610bef565b60405161023a9493929190611b7a565b60405180910390f35b61025d6004803603810190610258919061181a565b610c20565b60405161026a9190611b28565b60405180910390f35b61028d6004803603810190610288919061181a565b610c7a565b60405161029a9190611a95565b60405180910390f35b6102bd60048036038101906102b8919061181a565b610c8c565b6040516102ca9190611acb565b60405180910390f35b6102ed60048036038101906102e891906118bb565b610cc3565b6040516102fa9190611ae6565b60405180910390f35b61031d6004803603810190610318919061181a565b610cf5565b60405161032c93929190611b43565b60405180910390f35b600061034082610e19565b806103a857507fc1d1208c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60006001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104019190611c42565b9250508190555061041182610eeb565b905060038081111561044c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610499336106ab565b815260200190815260200160002081905550919050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600201549050919050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000015460001b9050919050565b6000808054905011156105b95733816040517fca3827140000000000000000000000000000000000000000000000000000000081526004016105b0929190611a43565b60405180910390fd5b735354453d6fa8a3a285abe7b7b34dadc70ae1a2fc73ffffffffffffffffffffffffffffffffffffffff16634279182b826040518263ffffffff1660e01b81526004016106069190611acb565b602060405180830381600087803b15801561062057600080fd5b505af1158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190611843565b5060008190806001815401808255809150506001900390600052602060002090600491828204019190066008029091909190916101000a81548167ffffffffffffffff021916908360c01c021790555050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600083610700816110ff565b6107435733816040517f63f9165100000000000000000000000000000000000000000000000000000000815260040161073a929190611a6c565b60405180910390fd5b8484600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561082257806040517fd449d6740000000000000000000000000000000000000000000000000000000081526004016108199190611a28565b60405180910390fd5b6001151561082f8861115d565b1515141561089857610840876111bd565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020549350610b3f565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b81526004016109469190611a28565b60206040518083038186803b15801561095e57600080fd5b505afa158015610972573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109969190611843565b905080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060020160008282546109fb9190611c42565b925050819055506000861415610a765780600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206000016000828254610a6e9190611c42565b925050819055505b6001861415610aea5780600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206001016000828254610ae29190611c42565b925050819055505b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020549450505b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050509392505050565b60008060008084806020019051810190610c09919061191e565b809450819550829650839750505050509193509193565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020549050919050565b6000610c85826110ff565b9050919050565b60008181548110610c9c57600080fd5b9060005260206000209060049182820401919006600802915054906101000a900460c01b81565b606084848484604051602001610cdc9493929190611b7a565b6040516020818303038152906040529050949350505050565b6000806000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020600001549250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000206001015491508183610db29190611c42565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060020154610e109190611d23565b90509193909250565b60007fc1d1208c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ee457507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000610ef6336106ab565b9050600080600080610f0786610bef565b9350935093509350838311610f51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4890611b08565b60405180910390fd5b83600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000206000018190555082600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087815260200190815260200160002060010181905550814261100d9190611c42565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000206002018190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050919050565b60006003600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205410159050919050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600201544211159050919050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206002015490506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112d057600080fd5b505afa1580156112e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113089190611843565b905061271081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206000015461136c9190611cc9565b6113769190611c98565b82101561141557600260038111156113b7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020819055505050611675565b600061271083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600101546114799190611cc9565b6114839190611c98565b90506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060010154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600001541190506000818015611594575082600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008881526020019081526020016000206000015410155b9050806115dd57600260038111156115d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff1661161b565b60026003811115611617577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff165b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008881526020019081526020016000208190555050505050505b50565b600061168b61168684611be4565b611bbf565b9050828152602081018484840111156116a357600080fd5b6116ae848285611e13565b509392505050565b6000813590506116c581611f4d565b92915050565b6000815190506116da81611f64565b92915050565b6000813590506116ef81611f7b565b92915050565b60008135905061170481611f92565b92915050565b600082601f83011261171b57600080fd5b813561172b848260208601611678565b91505092915050565b60008135905061174381611fa9565b92915050565b60008151905061175881611fa9565b92915050565b60006020828403121561177057600080fd5b600061177e848285016116b6565b91505092915050565b60006020828403121561179957600080fd5b60006117a7848285016116e0565b91505092915050565b6000602082840312156117c257600080fd5b60006117d0848285016116f5565b91505092915050565b6000602082840312156117eb57600080fd5b600082013567ffffffffffffffff81111561180557600080fd5b6118118482850161170a565b91505092915050565b60006020828403121561182c57600080fd5b600061183a84828501611734565b91505092915050565b60006020828403121561185557600080fd5b600061186384828501611749565b91505092915050565b60008060006060848603121561188157600080fd5b600061188f86828701611734565b93505060206118a0868287016116b6565b92505060406118b186828701611734565b9150509250925092565b600080600080608085870312156118d157600080fd5b60006118df87828801611734565b94505060206118f087828801611734565b935050604061190187828801611734565b9250506060611912878288016116b6565b91505092959194509250565b6000806000806080858703121561193457600080fd5b600061194287828801611749565b945050602061195387828801611749565b935050604061196487828801611749565b9250506060611975878288016116cb565b91505092959194509250565b61198a81611d57565b82525050565b61199981611d7b565b82525050565b6119a881611d87565b82525050565b6119b781611dbd565b82525050565b60006119c882611c15565b6119d28185611c20565b93506119e2818560208601611e22565b6119eb81611f13565b840191505092915050565b6000611a03601783611c31565b9150611a0e82611f24565b602082019050919050565b611a2281611e09565b82525050565b6000602082019050611a3d6000830184611981565b92915050565b6000604082019050611a586000830185611981565b611a6560208301846119ae565b9392505050565b6000604082019050611a816000830185611981565b611a8e6020830184611a19565b9392505050565b6000602082019050611aaa6000830184611990565b92915050565b6000602082019050611ac5600083018461199f565b92915050565b6000602082019050611ae060008301846119ae565b92915050565b60006020820190508181036000830152611b0081846119bd565b905092915050565b60006020820190508181036000830152611b21816119f6565b9050919050565b6000602082019050611b3d6000830184611a19565b92915050565b6000606082019050611b586000830186611a19565b611b656020830185611a19565b611b726040830184611a19565b949350505050565b6000608082019050611b8f6000830187611a19565b611b9c6020830186611a19565b611ba96040830185611a19565b611bb66060830184611981565b95945050505050565b6000611bc9611bda565b9050611bd58282611e55565b919050565b6000604051905090565b600067ffffffffffffffff821115611bff57611bfe611ee4565b5b611c0882611f13565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611c4d82611e09565b9150611c5883611e09565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c8d57611c8c611e86565b5b828201905092915050565b6000611ca382611e09565b9150611cae83611e09565b925082611cbe57611cbd611eb5565b5b828204905092915050565b6000611cd482611e09565b9150611cdf83611e09565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d1857611d17611e86565b5b828202905092915050565b6000611d2e82611e09565b9150611d3983611e09565b925082821015611d4c57611d4b611e86565b5b828203905092915050565b6000611d6282611de9565b9050919050565b6000611d7482611de9565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611e40578082015181840152602081019050611e25565b83811115611e4f576000848401525b50505050565b611e5e82611f13565b810181811067ffffffffffffffff82111715611e7d57611e7c611ee4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f696e636f6e73697374656e7420706172616d6574657273000000000000000000600082015250565b611f5681611d57565b8114611f6157600080fd5b50565b611f6d81611d69565b8114611f7857600080fd5b50565b611f8481611d91565b8114611f8f57600080fd5b50565b611f9b81611dbd565b8114611fa657600080fd5b50565b611fb281611e09565b8114611fbd57600080fd5b5056fea264697066735822122013dd5ba738191fc3244b598cfbbebfa16dd96e18e9bb780a9e21626ef601b1be64736f6c63430008040033";

type ThresholdTokenVoteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ThresholdTokenVoteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ThresholdTokenVote__factory extends ContractFactory {
  constructor(...args: ThresholdTokenVoteConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ThresholdTokenVote> {
    return super.deploy(overrides || {}) as Promise<ThresholdTokenVote>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ThresholdTokenVote {
    return super.attach(address) as ThresholdTokenVote;
  }
  override connect(signer: Signer): ThresholdTokenVote__factory {
    return super.connect(signer) as ThresholdTokenVote__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ThresholdTokenVoteInterface {
    return new utils.Interface(_abi) as ThresholdTokenVoteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ThresholdTokenVote {
    return new Contract(address, _abi, signerOrProvider) as ThresholdTokenVote;
  }
}