/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
} from "../../../../common";

export interface CategoryRegistrationInterface extends utils.Interface {
  functions: {
    "getNumberOfRegisteredCategories()": FunctionFragment;
    "getRegisteredCategoryFromIndex(uint256)": FunctionFragment;
    "isRegisteredCategory(bytes8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getNumberOfRegisteredCategories"
      | "getRegisteredCategoryFromIndex"
      | "isRegisteredCategory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNumberOfRegisteredCategories",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisteredCategoryFromIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegisteredCategory",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getNumberOfRegisteredCategories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisteredCategoryFromIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRegisteredCategory",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CategoryRegistration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CategoryRegistrationInterface;

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
    getNumberOfRegisteredCategories(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRegisteredCategoryFromIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isRegisteredCategory(
      category: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getNumberOfRegisteredCategories(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRegisteredCategoryFromIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isRegisteredCategory(
    category: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getNumberOfRegisteredCategories(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegisteredCategoryFromIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isRegisteredCategory(
      category: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getNumberOfRegisteredCategories(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegisteredCategoryFromIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRegisteredCategory(
      category: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNumberOfRegisteredCategories(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegisteredCategoryFromIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRegisteredCategory(
      category: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
