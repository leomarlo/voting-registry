/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleMajorityVoteAndImplement,
  SimpleMajorityVoteAndImplementInterface,
} from "../../../contracts/samples/SimpleMajorityVoteAndImplement";

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
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
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
        internalType: "uint256",
        name: "voteIndex",
        type: "uint256",
      },
    ],
    name: "getCallbackData",
    outputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "arguments",
        type: "bytes",
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
    name: "getCallbackResponse",
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
        internalType: "bytes",
        name: "votingParams",
        type: "bytes",
      },
      {
        internalType: "bytes4",
        name: "_callbackSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_callbackArgs",
        type: "bytes",
      },
    ],
    name: "start",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
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
  "0x608060405234801561001057600080fd5b50611ff1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80634f08c4ce1161008c578063c6cdbe5e11610066578063c6cdbe5e146102bb578063c75a2ffa146102eb578063d7f440721461031c578063e21f56861461034c576100ea565b80634f08c4ce1461022b57806379b848491461025b578063b7c112271461028b576100ea565b80633c594059116100c85780633c5940591461017f5780634279182b146101af578063475a7c49146101cb5780634de8737c146101fb576100ea565b806301ffc9a7146100ef57806307a1018e1461011f578063176cc99a1461014f575b600080fd5b610109600480360381019061010491906117c8565b61037c565b6040516101169190611b11565b60405180910390f35b6101396004803603810190610134919061181a565b6103f6565b6040516101469190611bb4565b60405180910390f35b610169600480360381019061016491906118da565b6104f7565b6040516101769190611b92565b60405180910390f35b610199600480360381019061019491906118da565b610520565b6040516101a69190611b2c565b60405180910390f35b6101c960048036038101906101c491906117f1565b61057d565b005b6101e560048036038101906101e0919061179f565b6106bb565b6040516101f29190611bb4565b60405180910390f35b6102156004803603810190610210919061192c565b610704565b6040516102229190611bb4565b60405180910390f35b6102456004803603810190610240919061181a565b610a4c565b6040516102529190611bb4565b60405180910390f35b610275600480360381019061027091906118da565b610a69565b6040516102829190611bb4565b60405180910390f35b6102a560048036038101906102a091906118da565b610ac3565b6040516102b29190611b11565b60405180910390f35b6102d560048036038101906102d091906118da565b610ad5565b6040516102e29190611b77565b60405180910390f35b610305600480360381019061030091906118da565b610b0c565b604051610313929190611b47565b60405180910390f35b6103366004803603810190610331919061185b565b610c56565b6040516103439190611bb4565b60405180910390f35b610366600480360381019061036191906118da565b610eb6565b6040516103739190611bcf565b60405180910390f35b600061038782610f58565b806103ef57507ff2b1390e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60006001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104489190611cfb565b9250508190555061045882610fd2565b9050600380811115610493577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104e0336106bb565b815260200190815260200160002081905550919050565b60608160405160200161050a9190611bb4565b6040516020818303038152906040529050919050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000205460001b9050919050565b6000808054905011156105c95733816040517fca3827140000000000000000000000000000000000000000000000000000000081526004016105c0929190611abf565b60405180910390fd5b735354453d6fa8a3a285abe7b7b34dadc70ae1a2fc73ffffffffffffffffffffffffffffffffffffffff16634279182b826040518263ffffffff1660e01b81526004016106169190611b77565b602060405180830381600087803b15801561063057600080fd5b505af1158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190611903565b5060008190806001815401808255809150506001900390600052602060002090600491828204019190066008029091909190916101000a81548167ffffffffffffffff021916908360c01c021790555050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000836107108161104c565b6107535733816040517f63f9165100000000000000000000000000000000000000000000000000000000815260040161074a929190611ae8565b60405180910390fd5b8484600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561083257806040517fd449d6740000000000000000000000000000000000000000000000000000000081526004016108299190611aa4565b60405180910390fd5b6001151561083f886110aa565b151514156108b15761085087611106565b61085987611235565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600088815260200190815260200160002054935061099c565b600085146108df577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6108e2565b60015b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060008282546109419190611c67565b92505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008881526020019081526020016000205493505b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050509392505050565b600081806020019051810190610a629190611903565b9050919050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020549050919050565b6000610ace8261104c565b9050919050565b60008181548110610ae557600080fd5b9060005260206000209060049182820401919006600802915054906101000a900460c01b81565b60006060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060000160009054906101000a900460e01b9150600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206001018054610bd190611e54565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfd90611e54565b8015610c4a5780601f10610c1f57610100808354040283529160200191610c4a565b820191906000526020600020905b815481529060010190602001808311610c2d57829003601f168201915b50505050509050915091565b60006001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca89190611cfb565b92505081905550610cb884610fd2565b90506040518060600160405280847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200183815260200160006002811115610d2a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060008201518160000160006101000a81548163ffffffff021916908360e01c02179055506020820151816001019080519060200190610dbd92919061162b565b5060408201518160020160006101000a81548160ff02191690836002811115610e0f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550905050600380811115610e50577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610e9d336106bb565b8152602001908152602001600020819055509392505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060020160009054906101000a900460ff166002811115610f51577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9050919050565b6000610f63826114aa565b80610fcb57507fc1d1208c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000610fdd336106bb565b9050610fe882610a4c565b42610ff39190611cfb565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550919050565b60006003600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205410159050919050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000205442119050919050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054136111a05760016003811115611198577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff166111de565b600260038111156111da577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60ff165b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000208190555050565b61140733600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060600160405290816000820160009054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020016001820180546112f990611e54565b80601f016020809104026020016040519081016040528092919081815260200182805461132590611e54565b80156113725780601f1061134757610100808354040283529160200191611372565b820191906000526020600020905b81548152906001019060200180831161135557829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660028111156113c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028111156113fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8152505061157c565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060020160006101000a81548160ff021916908360028111156114a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555050565b60007fc1d1208c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061157557507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000808373ffffffffffffffffffffffffffffffffffffffff16836000015184602001516040516020016115b1929190611a65565b6040516020818303038152906040526040516115cd9190611a8d565b6000604051808303816000865af19150503d806000811461160a576040519150601f19603f3d011682016040523d82523d6000602084013e61160f565b606091505b505090508061161f576002611622565b60015b91505092915050565b82805461163790611e54565b90600052602060002090601f01602090048101928261165957600085556116a0565b82601f1061167257805160ff19168380011785556116a0565b828001600101855582156116a0579182015b8281111561169f578251825591602001919060010190611684565b5b5090506116ad91906116b1565b5090565b5b808211156116ca5760008160009055506001016116b2565b5090565b60006116e16116dc84611c0f565b611bea565b9050828152602081018484840111156116f957600080fd5b611704848285611e12565b509392505050565b60008135905061171b81611f5f565b92915050565b60008135905061173081611f76565b92915050565b60008135905061174581611f8d565b92915050565b600082601f83011261175c57600080fd5b813561176c8482602086016116ce565b91505092915050565b60008135905061178481611fa4565b92915050565b60008151905061179981611fa4565b92915050565b6000602082840312156117b157600080fd5b60006117bf8482850161170c565b91505092915050565b6000602082840312156117da57600080fd5b60006117e884828501611721565b91505092915050565b60006020828403121561180357600080fd5b600061181184828501611736565b91505092915050565b60006020828403121561182c57600080fd5b600082013567ffffffffffffffff81111561184657600080fd5b6118528482850161174b565b91505092915050565b60008060006060848603121561187057600080fd5b600084013567ffffffffffffffff81111561188a57600080fd5b6118968682870161174b565b93505060206118a786828701611721565b925050604084013567ffffffffffffffff8111156118c457600080fd5b6118d08682870161174b565b9150509250925092565b6000602082840312156118ec57600080fd5b60006118fa84828501611775565b91505092915050565b60006020828403121561191557600080fd5b60006119238482850161178a565b91505092915050565b60008060006060848603121561194157600080fd5b600061194f86828701611775565b93505060206119608682870161170c565b925050604061197186828701611775565b9150509250925092565b61198481611d51565b82525050565b61199381611d63565b82525050565b6119a281611d6f565b82525050565b6119b181611d79565b82525050565b6119c86119c382611d79565b611eb7565b82525050565b6119d781611da5565b82525050565b60006119e882611c40565b6119f28185611c4b565b9350611a02818560208601611e21565b611a0b81611f4e565b840191505092915050565b6000611a2182611c40565b611a2b8185611c5c565b9350611a3b818560208601611e21565b80840191505092915050565b611a5081611dfb565b82525050565b611a5f81611e05565b82525050565b6000611a7182856119b7565b600482019150611a818284611a16565b91508190509392505050565b6000611a998284611a16565b915081905092915050565b6000602082019050611ab9600083018461197b565b92915050565b6000604082019050611ad4600083018561197b565b611ae160208301846119ce565b9392505050565b6000604082019050611afd600083018561197b565b611b0a6020830184611a47565b9392505050565b6000602082019050611b26600083018461198a565b92915050565b6000602082019050611b416000830184611999565b92915050565b6000604082019050611b5c60008301856119a8565b8181036020830152611b6e81846119dd565b90509392505050565b6000602082019050611b8c60008301846119ce565b92915050565b60006020820190508181036000830152611bac81846119dd565b905092915050565b6000602082019050611bc96000830184611a47565b92915050565b6000602082019050611be46000830184611a56565b92915050565b6000611bf4611c05565b9050611c008282611e86565b919050565b6000604051905090565b600067ffffffffffffffff821115611c2a57611c29611f1f565b5b611c3382611f4e565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611c7282611dd1565b9150611c7d83611dd1565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831360008312151615611cb857611cb7611ec1565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615611cf057611cef611ec1565b5b828201905092915050565b6000611d0682611dfb565b9150611d1183611dfb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d4657611d45611ec1565b5b828201905092915050565b6000611d5c82611ddb565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611e3f578082015181840152602081019050611e24565b83811115611e4e576000848401525b50505050565b60006002820490506001821680611e6c57607f821691505b60208210811415611e8057611e7f611ef0565b5b50919050565b611e8f82611f4e565b810181811067ffffffffffffffff82111715611eae57611ead611f1f565b5b80604052505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611f6881611d51565b8114611f7357600080fd5b50565b611f7f81611d79565b8114611f8a57600080fd5b50565b611f9681611da5565b8114611fa157600080fd5b50565b611fad81611dfb565b8114611fb857600080fd5b5056fea264697066735822122063547a96d6f19b8f472dd0692a9c42b6439794840ef09d3fe589d559faabc2b664736f6c63430008040033";

type SimpleMajorityVoteAndImplementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleMajorityVoteAndImplementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleMajorityVoteAndImplement__factory extends ContractFactory {
  constructor(...args: SimpleMajorityVoteAndImplementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleMajorityVoteAndImplement> {
    return super.deploy(
      overrides || {}
    ) as Promise<SimpleMajorityVoteAndImplement>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleMajorityVoteAndImplement {
    return super.attach(address) as SimpleMajorityVoteAndImplement;
  }
  override connect(signer: Signer): SimpleMajorityVoteAndImplement__factory {
    return super.connect(signer) as SimpleMajorityVoteAndImplement__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleMajorityVoteAndImplementInterface {
    return new utils.Interface(_abi) as SimpleMajorityVoteAndImplementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleMajorityVoteAndImplement {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleMajorityVoteAndImplement;
  }
}
