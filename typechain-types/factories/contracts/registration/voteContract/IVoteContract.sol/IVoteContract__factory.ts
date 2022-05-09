/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVoteContract,
  IVoteContractInterface,
} from "../../../../../contracts/registration/voteContract/IVoteContract.sol/IVoteContract";

const _abi = [
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
        name: "status",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVoteContract__factory {
  static readonly abi = _abi;
  static createInterface(): IVoteContractInterface {
    return new utils.Interface(_abi) as IVoteContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVoteContract {
    return new Contract(address, _abi, signerOrProvider) as IVoteContract;
  }
}
