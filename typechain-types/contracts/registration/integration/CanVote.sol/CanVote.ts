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
} from "../../../../common";

export interface CanVoteInterface extends utils.Interface {
  functions: {
    "getTotalVotesStarted()": FunctionFragment;
    "getVoteInfo(uint256)": FunctionFragment;
    "start(bytes4,bytes)": FunctionFragment;
    "vote(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getTotalVotesStarted"
      | "getVoteInfo"
      | "start"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getTotalVotesStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "start",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getTotalVotesStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface CanVote extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CanVoteInterface;

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
    getTotalVotesStarted(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    start(
      selector: BytesLike,
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

  getVoteInfo(
    voteIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  start(
    selector: BytesLike,
    votingParams: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    voteIndex: BigNumberish,
    option: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    start(
      selector: BytesLike,
      votingParams: BytesLike,
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
    getTotalVotesStarted(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(
      selector: BytesLike,
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTotalVotesStarted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVoteInfo(
      voteIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    start(
      selector: BytesLike,
      votingParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      voteIndex: BigNumberish,
      option: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
