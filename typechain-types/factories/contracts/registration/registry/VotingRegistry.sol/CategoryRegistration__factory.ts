/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CategoryRegistration,
  CategoryRegistrationInterface,
} from "../../../../../contracts/registration/registry/VotingRegistry.sol/CategoryRegistration";

const _abi = [
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
];

export class CategoryRegistration__factory {
  static readonly abi = _abi;
  static createInterface(): CategoryRegistrationInterface {
    return new utils.Interface(_abi) as CategoryRegistrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CategoryRegistration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CategoryRegistration;
  }
}