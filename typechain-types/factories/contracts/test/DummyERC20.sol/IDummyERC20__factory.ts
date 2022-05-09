/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDummyERC20,
  IDummyERC20Interface,
} from "../../../../contracts/test/DummyERC20.sol/IDummyERC20";

const _abi = [
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
];

export class IDummyERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IDummyERC20Interface {
    return new utils.Interface(_abi) as IDummyERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDummyERC20 {
    return new Contract(address, _abi, signerOrProvider) as IDummyERC20;
  }
}