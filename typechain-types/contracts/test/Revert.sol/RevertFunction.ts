/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../../common";

export interface RevertFunctionInterface extends utils.Interface {
  functions: {
    "fail()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "fail"): FunctionFragment;

  encodeFunctionData(functionFragment: "fail", values?: undefined): string;

  decodeFunctionResult(functionFragment: "fail", data: BytesLike): Result;

  events: {};
}

export interface RevertFunction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RevertFunctionInterface;

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
    fail(overrides?: CallOverrides): Promise<[void]>;
  };

  fail(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    fail(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fail(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fail(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}