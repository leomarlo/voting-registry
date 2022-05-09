/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Registry,
  RegistryInterface,
} from "../../../../../contracts/registration/registry/VotingRegistry.sol/Registry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "contractSeekingRegistration",
        type: "address",
      },
    ],
    name: "AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "notRegisteredContract",
        type: "address",
      },
    ],
    name: "NotRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "categoryId",
        type: "bytes8",
      },
    ],
    name: "addCategoryToRegistration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfRegisteredCategories",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRegisteredCategoryFromIndex",
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
        internalType: "address",
        name: "votingContract",
        type: "address",
      },
    ],
    name: "getRegistrationIndex",
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
        name: "votingContract",
        type: "address",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "_isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "category",
        type: "bytes8",
      },
    ],
    name: "isRegisteredCategory",
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
    name: "numberOfRegistrations",
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
        name: "_categoryId",
        type: "bytes8",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint256",
        name: "registrationIndex",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ad8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639c4c4f8c1161005b5780639c4c4f8c14610139578063c3c5a54714610157578063d8f63eb714610187578063eedfc82b146101a557610088565b80631d50be2d1461008d5780634279182b146100bd57806366141f48146100ed5780638b5a57b514610109575b600080fd5b6100a760048036038101906100a291906107a9565b6101d5565b6040516100b49190610891565b60405180910390f35b6100d760048036038101906100d29190610780565b6101fe565b6040516100e491906108cc565b60405180910390f35b61010760048036038101906101029190610780565b6102aa565b005b610123600480360381019061011e919061072e565b610300565b60405161013091906108cc565b60405180910390f35b610141610349565b60405161014e91906108cc565b60405180910390f35b610171600480360381019061016c919061072e565b610353565b60405161017e919061085b565b60405180910390f35b61018f61039e565b60405161019c91906108cc565b60405180910390f35b6101bf60048036038101906101ba9190610780565b6103a8565b6040516101cc919061085b565b60405180910390f35b600080600083815260200190815260200160002060009054906101000a900460c01b9050919050565b600061020933610353565b1561024b57336040517f45ed80e90000000000000000000000000000000000000000000000000000000081526004016102429190610840565b60405180910390fd5b6102536103fd565b610292576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610289906108ac565b60405180910390fd5b61029a6104ad565b90506102a582610517565b919050565b6102b333610353565b6102f457336040517fbfc6c3370000000000000000000000000000000000000000000000000000000081526004016102eb9190610840565b60405180910390fd5b6102fd81610517565b50565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600254905090565b600080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b6000600454905090565b600080600160008477ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002054119050919050565b60003373ffffffffffffffffffffffffffffffffffffffff166301ffc9a77fc1d1208c000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016104589190610876565b60206040518083038186803b15801561047057600080fd5b505afa158015610484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a89190610757565b905090565b60006001600460008282546104c291906108f8565b92505081905550600454600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454905090565b80610521816103a8565b61052f5761052e82610639565b5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057f91906108f8565b9250508190555080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060006101000a81548167ffffffffffffffff021916908360c01c02179055505050565b60016002600082825461064c91906108f8565b9250508190555080600080600254815260200190815260200160002060006101000a81548167ffffffffffffffff021916908360c01c0217905550600254600160008377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000208190555050565b6000813590506106e981610a46565b92915050565b6000815190506106fe81610a5d565b92915050565b60008135905061071381610a74565b92915050565b60008135905061072881610a8b565b92915050565b60006020828403121561074057600080fd5b600061074e848285016106da565b91505092915050565b60006020828403121561076957600080fd5b6000610777848285016106ef565b91505092915050565b60006020828403121561079257600080fd5b60006107a084828501610704565b91505092915050565b6000602082840312156107bb57600080fd5b60006107c984828501610719565b91505092915050565b6107db8161094e565b82525050565b6107ea81610960565b82525050565b6107f98161096c565b82525050565b61080881610998565b82525050565b600061081b601c836108e7565b915061082682610a1d565b602082019050919050565b61083a816109e4565b82525050565b600060208201905061085560008301846107d2565b92915050565b600060208201905061087060008301846107e1565b92915050565b600060208201905061088b60008301846107f0565b92915050565b60006020820190506108a660008301846107ff565b92915050565b600060208201905081810360008301526108c58161080e565b9050919050565b60006020820190506108e16000830184610831565b92915050565b600082825260208201905092915050565b6000610903826109e4565b915061090e836109e4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610943576109426109ee565b5b828201905092915050565b6000610959826109c4565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f646f6573206e6f7420696d706c656d656e7420696e7465726661636500000000600082015250565b610a4f8161094e565b8114610a5a57600080fd5b50565b610a6681610960565b8114610a7157600080fd5b50565b610a7d81610998565b8114610a8857600080fd5b50565b610a94816109e4565b8114610a9f57600080fd5b5056fea2646970667358221220d021cc30fe04358b07f256b15109c5d9a1dbee775878c3842c0fd9a6b19922b364736f6c63430008040033";

type RegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Registry__factory extends ContractFactory {
  constructor(...args: RegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Registry> {
    return super.deploy(overrides || {}) as Promise<Registry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Registry {
    return super.attach(address) as Registry;
  }
  override connect(signer: Signer): Registry__factory {
    return super.connect(signer) as Registry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegistryInterface {
    return new utils.Interface(_abi) as RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registry {
    return new Contract(address, _abi, signerOrProvider) as Registry;
  }
}
