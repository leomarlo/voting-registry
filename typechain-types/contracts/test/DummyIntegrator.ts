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

export interface DummyIntegratorInterface extends utils.Interface {
  functions: {
    "changeOwner(address)": FunctionFragment;
    "changeOwnerSelector()": FunctionFragment;
    "changeSomeoneElse(address)": FunctionFragment;
    "changeSomeoneElseSelector()": FunctionFragment;
    "dummyERC20()": FunctionFragment;
    "getTotalVotesStarted()": FunctionFragment;
    "getVoteInfo(uint256)": FunctionFragment;
    "getVotingContract(bytes4)": FunctionFragment;
    "owner()": FunctionFragment;
    "someoneElse()": FunctionFragment;
    "start(bytes,bytes4,bytes)": FunctionFragment;
    "vote(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeOwner"
      | "changeOwnerSelector"
      | "changeSomeoneElse"
      | "changeSomeoneElseSelector"
      | "dummyERC20"
      | "getTotalVotesStarted"
      | "getVoteInfo"
      | "getVotingContract"
      | "owner"
      | "someoneElse"
      | "start"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeOwnerSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeSomeoneElse",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeSomeoneElseSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dummyERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotesStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingContract",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "someoneElse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "start",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwnerSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeSomeoneElse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeSomeoneElseSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dummyERC20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotesStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "someoneElse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface DummyIntegrator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DummyIntegratorInterface;

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
    changeOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeOwnerSelector(overrides?: CallOverrides): Promise<[string]>;

    changeSomeoneElse(
      newSomeoneElse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeSomeoneElseSelector(overrides?: CallOverrides): Promise<[string]>;

    dummyERC20(overrides?: CallOverrides): Promise<[string]>;

    getTotalVotesStarted(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getVotingContract(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    someoneElse(overrides?: CallOverrides): Promise<[string]>;

    start(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeOwnerSelector(overrides?: CallOverrides): Promise<string>;

  changeSomeoneElse(
    newSomeoneElse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeSomeoneElseSelector(overrides?: CallOverrides): Promise<string>;

  dummyERC20(overrides?: CallOverrides): Promise<string>;

  getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

  getVoteInfo(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  getVotingContract(
    selector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  someoneElse(overrides?: CallOverrides): Promise<string>;

  start(
    votingParams: BytesLike,
    _callbackSelector: BytesLike,
    _callbackArgs: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    voteIndex: BigNumberish,
    option: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    changeOwnerSelector(overrides?: CallOverrides): Promise<string>;

    changeSomeoneElse(
      newSomeoneElse: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeSomeoneElseSelector(overrides?: CallOverrides): Promise<string>;

    dummyERC20(overrides?: CallOverrides): Promise<string>;

    getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getVotingContract(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    someoneElse(overrides?: CallOverrides): Promise<string>;

    start(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    changeOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeOwnerSelector(overrides?: CallOverrides): Promise<BigNumber>;

    changeSomeoneElse(
      newSomeoneElse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeSomeoneElseSelector(overrides?: CallOverrides): Promise<BigNumber>;

    dummyERC20(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingContract(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    someoneElse(overrides?: CallOverrides): Promise<BigNumber>;

    start(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeOwnerSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeSomeoneElse(
      newSomeoneElse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeSomeoneElseSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dummyERC20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalVotesStarted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotingContract(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    someoneElse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start(
      votingParams: BytesLike,
      _callbackSelector: BytesLike,
      _callbackArgs: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
