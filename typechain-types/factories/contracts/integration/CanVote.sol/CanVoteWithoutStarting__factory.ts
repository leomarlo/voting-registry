/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CanVoteWithoutStarting,
  CanVoteWithoutStartingInterface,
} from "../../../../contracts/integration/CanVote.sol/CanVoteWithoutStarting";

const _abi = [
  {
    inputs: [],
    name: "getTotalVotesStarted",
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
    name: "getVoteInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CanVoteWithoutStarting__factory {
  static readonly abi = _abi;
  static createInterface(): CanVoteWithoutStartingInterface {
    return new utils.Interface(_abi) as CanVoteWithoutStartingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CanVoteWithoutStarting {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CanVoteWithoutStarting;
  }
}
