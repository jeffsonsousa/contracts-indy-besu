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

export interface EthereumExtDidRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "addDelegate"
      | "addDelegateSigned"
      | "changeOwner"
      | "changeOwnerSigned"
      | "changed"
      | "delegates"
      | "identityOwner"
      | "initialize"
      | "nonce"
      | "owners"
      | "proxiableUUID"
      | "revokeAttribute"
      | "revokeAttributeSigned"
      | "revokeDelegate"
      | "revokeDelegateSigned"
      | "setAttribute"
      | "setAttributeSigned"
      | "upgradeToAndCall"
      | "validDelegate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DIDAttributeChanged"
      | "DIDDelegateChanged"
      | "DIDOwnerChanged"
      | "Initialized"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addDelegate",
    values: [AddressLike, BytesLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addDelegateSigned",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwnerSigned",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [AddressLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "identityOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "owners", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAttribute",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAttributeSigned",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeDelegate",
    values: [AddressLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeDelegateSigned",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAttribute",
    values: [AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAttributeSigned",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validDelegate",
    values: [AddressLike, BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDelegateSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwnerSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "identityOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAttributeSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeDelegateSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAttributeSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validDelegate",
    data: BytesLike
  ): Result;
}

export namespace DIDAttributeChangedEvent {
  export type InputTuple = [
    identity: AddressLike,
    name: BytesLike,
    value: BytesLike,
    validTo: BigNumberish,
    previousChange: BigNumberish
  ];
  export type OutputTuple = [
    identity: string,
    name: string,
    value: string,
    validTo: bigint,
    previousChange: bigint
  ];
  export interface OutputObject {
    identity: string;
    name: string;
    value: string;
    validTo: bigint;
    previousChange: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DIDDelegateChangedEvent {
  export type InputTuple = [
    identity: AddressLike,
    delegateType: BytesLike,
    delegate: AddressLike,
    validTo: BigNumberish,
    previousChange: BigNumberish
  ];
  export type OutputTuple = [
    identity: string,
    delegateType: string,
    delegate: string,
    validTo: bigint,
    previousChange: bigint
  ];
  export interface OutputObject {
    identity: string;
    delegateType: string;
    delegate: string;
    validTo: bigint;
    previousChange: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DIDOwnerChangedEvent {
  export type InputTuple = [
    identity: AddressLike,
    owner: AddressLike,
    previousChange: BigNumberish
  ];
  export type OutputTuple = [
    identity: string,
    owner: string,
    previousChange: bigint
  ];
  export interface OutputObject {
    identity: string;
    owner: string;
    previousChange: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export interface EthereumExtDidRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): EthereumExtDidRegistry;
  waitForDeployment(): Promise<this>;

  interface: EthereumExtDidRegistryInterface;

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

  addDelegate: TypedContractMethod<
    [
      identity: AddressLike,
      delegateType: BytesLike,
      delegate: AddressLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  addDelegateSigned: TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      delegateType: BytesLike,
      delegate: AddressLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  changeOwner: TypedContractMethod<
    [identity: AddressLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  changeOwnerSigned: TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      newOwner: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  changed: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  delegates: TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike, arg2: AddressLike],
    [bigint],
    "view"
  >;

  identityOwner: TypedContractMethod<[identity: AddressLike], [string], "view">;

  initialize: TypedContractMethod<
    [upgradeControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  nonce: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  owners: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  revokeAttribute: TypedContractMethod<
    [identity: AddressLike, name: BytesLike, value: BytesLike],
    [void],
    "nonpayable"
  >;

  revokeAttributeSigned: TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      name: BytesLike,
      value: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  revokeDelegate: TypedContractMethod<
    [identity: AddressLike, delegateType: BytesLike, delegate: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeDelegateSigned: TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      delegateType: BytesLike,
      delegate: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  setAttribute: TypedContractMethod<
    [
      identity: AddressLike,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setAttributeSigned: TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  validDelegate: TypedContractMethod<
    [identity: AddressLike, delegateType: BytesLike, delegate: AddressLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addDelegate"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      delegateType: BytesLike,
      delegate: AddressLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addDelegateSigned"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      delegateType: BytesLike,
      delegate: AddressLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeOwner"
  ): TypedContractMethod<
    [identity: AddressLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeOwnerSigned"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      newOwner: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changed"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "delegates"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike, arg2: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "identityOwner"
  ): TypedContractMethod<[identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [upgradeControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nonce"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "owners"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "revokeAttribute"
  ): TypedContractMethod<
    [identity: AddressLike, name: BytesLike, value: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeAttributeSigned"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      name: BytesLike,
      value: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeDelegate"
  ): TypedContractMethod<
    [identity: AddressLike, delegateType: BytesLike, delegate: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeDelegateSigned"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      delegateType: BytesLike,
      delegate: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAttribute"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAttributeSigned"
  ): TypedContractMethod<
    [
      identity: AddressLike,
      sigV: BigNumberish,
      sigR: BytesLike,
      sigS: BytesLike,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "validDelegate"
  ): TypedContractMethod<
    [identity: AddressLike, delegateType: BytesLike, delegate: AddressLike],
    [boolean],
    "view"
  >;

  getEvent(
    key: "DIDAttributeChanged"
  ): TypedContractEvent<
    DIDAttributeChangedEvent.InputTuple,
    DIDAttributeChangedEvent.OutputTuple,
    DIDAttributeChangedEvent.OutputObject
  >;
  getEvent(
    key: "DIDDelegateChanged"
  ): TypedContractEvent<
    DIDDelegateChangedEvent.InputTuple,
    DIDDelegateChangedEvent.OutputTuple,
    DIDDelegateChangedEvent.OutputObject
  >;
  getEvent(
    key: "DIDOwnerChanged"
  ): TypedContractEvent<
    DIDOwnerChangedEvent.InputTuple,
    DIDOwnerChangedEvent.OutputTuple,
    DIDOwnerChangedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "DIDAttributeChanged(address,bytes32,bytes,uint256,uint256)": TypedContractEvent<
      DIDAttributeChangedEvent.InputTuple,
      DIDAttributeChangedEvent.OutputTuple,
      DIDAttributeChangedEvent.OutputObject
    >;
    DIDAttributeChanged: TypedContractEvent<
      DIDAttributeChangedEvent.InputTuple,
      DIDAttributeChangedEvent.OutputTuple,
      DIDAttributeChangedEvent.OutputObject
    >;

    "DIDDelegateChanged(address,bytes32,address,uint256,uint256)": TypedContractEvent<
      DIDDelegateChangedEvent.InputTuple,
      DIDDelegateChangedEvent.OutputTuple,
      DIDDelegateChangedEvent.OutputObject
    >;
    DIDDelegateChanged: TypedContractEvent<
      DIDDelegateChangedEvent.InputTuple,
      DIDDelegateChangedEvent.OutputTuple,
      DIDDelegateChangedEvent.OutputObject
    >;

    "DIDOwnerChanged(address,address,uint256)": TypedContractEvent<
      DIDOwnerChangedEvent.InputTuple,
      DIDOwnerChangedEvent.OutputTuple,
      DIDOwnerChangedEvent.OutputObject
    >;
    DIDOwnerChanged: TypedContractEvent<
      DIDOwnerChangedEvent.InputTuple,
      DIDOwnerChangedEvent.OutputTuple,
      DIDOwnerChangedEvent.OutputObject
    >;

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
