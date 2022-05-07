/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ThresholdTokenVoteAndImplementInterface
  extends utils.Interface {
  functions: {
    "categories(uint256)": FunctionFragment;
    "decodeVotingParams(bytes)": FunctionFragment;
    "encodeVotingParams(uint256,uint256,uint256,address)": FunctionFragment;
    "getCallbackData(uint256)": FunctionFragment;
    "getCallbackResponse(address,uint256)": FunctionFragment;
    "getCallbackResponse(uint256)": FunctionFragment;
    "getCurrentVoteIndex(address)": FunctionFragment;
    "getCurrentVotingStatus(uint256)": FunctionFragment;
    "getStatus(address,uint256)": FunctionFragment;
    "getTTL(address,uint256)": FunctionFragment;
    "getTotalVotes(uint256)": FunctionFragment;
    "getTotalVotes(address,uint256)": FunctionFragment;
    "getVotes(address,uint256)": FunctionFragment;
    "getVotes(uint256)": FunctionFragment;
    "register(bytes8)": FunctionFragment;
    "result(uint256)": FunctionFragment;
    "result(address,uint256)": FunctionFragment;
    "start(bytes)": FunctionFragment;
    "start(bytes,bytes4,bytes)": FunctionFragment;
    "statusPermitsVoting(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "vote(uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "categories"
      | "decodeVotingParams"
      | "encodeVotingParams"
      | "getCallbackData"
      | "getCallbackResponse(address,uint256)"
      | "getCallbackResponse(uint256)"
      | "getCurrentVoteIndex"
      | "getCurrentVotingStatus"
      | "getStatus"
      | "getTTL"
      | "getTotalVotes(uint256)"
      | "getTotalVotes(address,uint256)"
      | "getVotes(address,uint256)"
      | "getVotes(uint256)"
      | "register"
      | "result(uint256)"
      | "result(address,uint256)"
      | "start(bytes)"
      | "start(bytes,bytes4,bytes)"
      | "statusPermitsVoting"
      | "supportsInterface"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "categories",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeVotingParams",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeVotingParams",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackResponse(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackResponse(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentVoteIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentVotingStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStatus",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTTL",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotes(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotes(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "register", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "result(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "result(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "start(bytes)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "start(bytes,bytes4,bytes)",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "statusPermitsVoting",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "categories", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decodeVotingParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeVotingParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackResponse(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackResponse(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentVoteIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentVotingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTTL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotes(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotes(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotes(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotes(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "result(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "result(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "start(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "start(bytes,bytes4,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "statusPermitsVoting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface ThresholdTokenVoteAndImplement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ThresholdTokenVoteAndImplementInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    categories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    decodeVotingParams(
      votingParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        quorum: BigNumber;
        thresholdInBasisPoints: BigNumber;
        duration: BigNumber;
        tokenAddress: string;
      }
    >;

    encodeVotingParams(
      quorum: BigNumberish,
      threshold: BigNumberish,
      duration: BigNumberish,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCallbackData(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { selector: string; arguments: string }>;

    "getCallbackResponse(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getCallbackResponse(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getCurrentVoteIndex(
      caller: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentVotingStatus(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStatus(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTTL(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTotalVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTotalVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        pro: BigNumber;
        contra: BigNumber;
        abstain: BigNumber;
      }
    >;

    "getVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        pro: BigNumber;
        contra: BigNumber;
        abstain: BigNumber;
      }
    >;

    register(
      categoryId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "result(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { votingResult: string }>;

    "result(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { votingResult: string }>;

    "start(bytes)"(
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "start(bytes,bytes4,bytes)"(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    statusPermitsVoting(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    vote(
      voteIndex: BigNumberish,
      voter: string,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  categories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  decodeVotingParams(
    votingParams: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string] & {
      quorum: BigNumber;
      thresholdInBasisPoints: BigNumber;
      duration: BigNumber;
      tokenAddress: string;
    }
  >;

  encodeVotingParams(
    quorum: BigNumberish,
    threshold: BigNumberish,
    duration: BigNumberish,
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getCallbackData(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { selector: string; arguments: string }>;

  "getCallbackResponse(address,uint256)"(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "getCallbackResponse(uint256)"(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getCurrentVoteIndex(
    caller: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentVotingStatus(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStatus(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTTL(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalVotes(uint256)"(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalVotes(address,uint256)"(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getVotes(address,uint256)"(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      pro: BigNumber;
      contra: BigNumber;
      abstain: BigNumber;
    }
  >;

  "getVotes(uint256)"(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      pro: BigNumber;
      contra: BigNumber;
      abstain: BigNumber;
    }
  >;

  register(
    categoryId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "result(uint256)"(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "result(address,uint256)"(
    caller: string,
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "start(bytes)"(
    votingParams: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "start(bytes,bytes4,bytes)"(
    votingParams: BytesLike,
    _callbackSelector: BytesLike,
    _callbackArgs: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  statusPermitsVoting(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  vote(
    voteIndex: BigNumberish,
    voter: string,
    option: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    categories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    decodeVotingParams(
      votingParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        quorum: BigNumber;
        thresholdInBasisPoints: BigNumber;
        duration: BigNumber;
        tokenAddress: string;
      }
    >;

    encodeVotingParams(
      quorum: BigNumberish,
      threshold: BigNumberish,
      duration: BigNumberish,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getCallbackData(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { selector: string; arguments: string }>;

    "getCallbackResponse(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "getCallbackResponse(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getCurrentVoteIndex(
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentVotingStatus(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatus(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTTL(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        pro: BigNumber;
        contra: BigNumber;
        abstain: BigNumber;
      }
    >;

    "getVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        pro: BigNumber;
        contra: BigNumber;
        abstain: BigNumber;
      }
    >;

    register(categoryId: BytesLike, overrides?: CallOverrides): Promise<void>;

    "result(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "result(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "start(bytes)"(
      votingParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "start(bytes,bytes4,bytes)"(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statusPermitsVoting(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    vote(
      voteIndex: BigNumberish,
      voter: string,
      option: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    categories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decodeVotingParams(
      votingParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeVotingParams(
      quorum: BigNumberish,
      threshold: BigNumberish,
      duration: BigNumberish,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCallbackData(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCallbackResponse(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCallbackResponse(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentVoteIndex(
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentVotingStatus(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatus(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTTL(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      categoryId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "result(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "result(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "start(bytes)"(
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "start(bytes,bytes4,bytes)"(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    statusPermitsVoting(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      voteIndex: BigNumberish,
      voter: string,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    categories(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decodeVotingParams(
      votingParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeVotingParams(
      quorum: BigNumberish,
      threshold: BigNumberish,
      duration: BigNumberish,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCallbackData(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCallbackResponse(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCallbackResponse(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentVoteIndex(
      caller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentVotingStatus(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatus(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTTL(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVotes(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVotes(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      categoryId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "result(uint256)"(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "result(address,uint256)"(
      caller: string,
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "start(bytes)"(
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "start(bytes,bytes4,bytes)"(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    statusPermitsVoting(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      voteIndex: BigNumberish,
      voter: string,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
