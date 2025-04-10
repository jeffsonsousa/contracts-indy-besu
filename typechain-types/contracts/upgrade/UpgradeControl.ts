/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface UpgradeControlInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "approve"
      | "ensureSufficientApprovals"
      | "initialize"
      | "propose"
      | "proxiableUUID"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "UpgradeApproved"
      | "UpgradeProposed"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ensureSufficientApprovals",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ensureSufficientApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradeApprovedEvent {
  export type InputTuple = [
    proxy: AddressLike,
    implementation: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [
    proxy: string,
    implementation: string,
    sender: string
  ];
  export interface OutputObject {
    proxy: string;
    implementation: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradeProposedEvent {
  export type InputTuple = [
    proxy: AddressLike,
    implementation: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [
    proxy: string,
    implementation: string,
    sender: string
  ];
  export interface OutputObject {
    proxy: string;
    implementation: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UpgradeControl extends BaseContract {
  connect(runner?: ContractRunner | null): UpgradeControl;
  waitForDeployment(): Promise<this>;

  interface: UpgradeControlInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  approve: TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  ensureSufficientApprovals: TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "view"
  >;

  initialize: TypedContractMethod<
    [roleControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  propose: TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ensureSufficientApprovals"
  ): TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [roleControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [proxy: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "UpgradeApproved"
  ): TypedContractEvent<
    UpgradeApprovedEvent.InputTuple,
    UpgradeApprovedEvent.OutputTuple,
    UpgradeApprovedEvent.OutputObject
  >;
  getEvent(
    key: "UpgradeProposed"
  ): TypedContractEvent<
    UpgradeProposedEvent.InputTuple,
    UpgradeProposedEvent.OutputTuple,
    UpgradeProposedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "UpgradeApproved(address,address,address)": TypedContractEvent<
      UpgradeApprovedEvent.InputTuple,
      UpgradeApprovedEvent.OutputTuple,
      UpgradeApprovedEvent.OutputObject
    >;
    UpgradeApproved: TypedContractEvent<
      UpgradeApprovedEvent.InputTuple,
      UpgradeApprovedEvent.OutputTuple,
      UpgradeApprovedEvent.OutputObject
    >;

    "UpgradeProposed(address,address,address)": TypedContractEvent<
      UpgradeProposedEvent.InputTuple,
      UpgradeProposedEvent.OutputTuple,
      UpgradeProposedEvent.OutputObject
    >;
    UpgradeProposed: TypedContractEvent<
      UpgradeProposedEvent.InputTuple,
      UpgradeProposedEvent.OutputTuple,
      UpgradeProposedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
