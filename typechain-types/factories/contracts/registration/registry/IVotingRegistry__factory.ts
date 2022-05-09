/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVotingRegistry,
  IVotingRegistryInterface,
} from "../../../../contracts/registration/registry/IVotingRegistry";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "voteContract",
        type: "address",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "registrationFlag",
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
        name: "categoryId",
        type: "bytes8",
      },
    ],
    name: "isRegisteredCategory",
    outputs: [
      {
        internalType: "bool",
        name: "registrationFlag",
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
        name: "categoryId",
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

export class IVotingRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IVotingRegistryInterface {
    return new utils.Interface(_abi) as IVotingRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVotingRegistry {
    return new Contract(address, _abi, signerOrProvider) as IVotingRegistry;
  }
}
