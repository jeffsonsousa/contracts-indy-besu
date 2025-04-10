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

export type VerificationMethodStruct = {
  id: string;
  verificationMethodType: string;
  controller: string;
  publicKeyJwk: string;
  publicKeyMultibase: string;
};

export type VerificationMethodStructOutput = [
  id: string,
  verificationMethodType: string,
  controller: string,
  publicKeyJwk: string,
  publicKeyMultibase: string
] & {
  id: string;
  verificationMethodType: string;
  controller: string;
  publicKeyJwk: string;
  publicKeyMultibase: string;
};

export type VerificationRelationshipStruct = {
  id: string;
  verificationMethod: VerificationMethodStruct;
};

export type VerificationRelationshipStructOutput = [
  id: string,
  verificationMethod: VerificationMethodStructOutput
] & { id: string; verificationMethod: VerificationMethodStructOutput };

export type ServiceStruct = {
  id: string;
  serviceType: string;
  serviceEndpoint: string;
  accept: string[];
  routingKeys: string[];
};

export type ServiceStructOutput = [
  id: string,
  serviceType: string,
  serviceEndpoint: string,
  accept: string[],
  routingKeys: string[]
] & {
  id: string;
  serviceType: string;
  serviceEndpoint: string;
  accept: string[];
  routingKeys: string[];
};

export type DidDocumentStruct = {
  context: string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethodStruct[];
  authentication: VerificationRelationshipStruct[];
  assertionMethod: VerificationRelationshipStruct[];
  capabilityInvocation: VerificationRelationshipStruct[];
  capabilityDelegation: VerificationRelationshipStruct[];
  keyAgreement: VerificationRelationshipStruct[];
  service: ServiceStruct[];
  alsoKnownAs: string[];
};

export type DidDocumentStructOutput = [
  context: string[],
  id: string,
  controller: string[],
  verificationMethod: VerificationMethodStructOutput[],
  authentication: VerificationRelationshipStructOutput[],
  assertionMethod: VerificationRelationshipStructOutput[],
  capabilityInvocation: VerificationRelationshipStructOutput[],
  capabilityDelegation: VerificationRelationshipStructOutput[],
  keyAgreement: VerificationRelationshipStructOutput[],
  service: ServiceStructOutput[],
  alsoKnownAs: string[]
] & {
  context: string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethodStructOutput[];
  authentication: VerificationRelationshipStructOutput[];
  assertionMethod: VerificationRelationshipStructOutput[];
  capabilityInvocation: VerificationRelationshipStructOutput[];
  capabilityDelegation: VerificationRelationshipStructOutput[];
  keyAgreement: VerificationRelationshipStructOutput[];
  service: ServiceStructOutput[];
  alsoKnownAs: string[];
};

export type DidMetadataStruct = {
  creator: AddressLike;
  created: BigNumberish;
  updated: BigNumberish;
  deactivated: boolean;
};

export type DidMetadataStructOutput = [
  creator: string,
  created: bigint,
  updated: bigint,
  deactivated: boolean
] & { creator: string; created: bigint; updated: bigint; deactivated: boolean };

export type DidDocumentStorageStruct = {
  document: DidDocumentStruct;
  metadata: DidMetadataStruct;
};

export type DidDocumentStorageStructOutput = [
  document: DidDocumentStructOutput,
  metadata: DidMetadataStructOutput
] & { document: DidDocumentStructOutput; metadata: DidMetadataStructOutput };

export interface IndyDidRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "createDid"
      | "deactivateDid"
      | "initialize"
      | "proxiableUUID"
      | "resolveDid"
      | "updateDid"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DIDCreated"
      | "DIDDeactivated"
      | "DIDUpdated"
      | "Initialized"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createDid",
    values: [DidDocumentStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateDid",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resolveDid", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateDid",
    values: [DidDocumentStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createDid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deactivateDid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolveDid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateDid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace DIDCreatedEvent {
  export type InputTuple = [did: string];
  export type OutputTuple = [did: string];
  export interface OutputObject {
    did: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DIDDeactivatedEvent {
  export type InputTuple = [did: string];
  export type OutputTuple = [did: string];
  export interface OutputObject {
    did: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DIDUpdatedEvent {
  export type InputTuple = [did: string];
  export type OutputTuple = [did: string];
  export interface OutputObject {
    did: string;
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

export interface IndyDidRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IndyDidRegistry;
  waitForDeployment(): Promise<this>;

  interface: IndyDidRegistryInterface;

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

  createDid: TypedContractMethod<
    [document: DidDocumentStruct],
    [void],
    "nonpayable"
  >;

  deactivateDid: TypedContractMethod<[id: string], [void], "nonpayable">;

  initialize: TypedContractMethod<
    [upgradeControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  resolveDid: TypedContractMethod<
    [id: string],
    [DidDocumentStorageStructOutput],
    "view"
  >;

  updateDid: TypedContractMethod<
    [document: DidDocumentStruct],
    [void],
    "nonpayable"
  >;

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
    nameOrSignature: "createDid"
  ): TypedContractMethod<[document: DidDocumentStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deactivateDid"
  ): TypedContractMethod<[id: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [upgradeControlAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "resolveDid"
  ): TypedContractMethod<
    [id: string],
    [DidDocumentStorageStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "updateDid"
  ): TypedContractMethod<[document: DidDocumentStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "DIDCreated"
  ): TypedContractEvent<
    DIDCreatedEvent.InputTuple,
    DIDCreatedEvent.OutputTuple,
    DIDCreatedEvent.OutputObject
  >;
  getEvent(
    key: "DIDDeactivated"
  ): TypedContractEvent<
    DIDDeactivatedEvent.InputTuple,
    DIDDeactivatedEvent.OutputTuple,
    DIDDeactivatedEvent.OutputObject
  >;
  getEvent(
    key: "DIDUpdated"
  ): TypedContractEvent<
    DIDUpdatedEvent.InputTuple,
    DIDUpdatedEvent.OutputTuple,
    DIDUpdatedEvent.OutputObject
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
    "DIDCreated(string)": TypedContractEvent<
      DIDCreatedEvent.InputTuple,
      DIDCreatedEvent.OutputTuple,
      DIDCreatedEvent.OutputObject
    >;
    DIDCreated: TypedContractEvent<
      DIDCreatedEvent.InputTuple,
      DIDCreatedEvent.OutputTuple,
      DIDCreatedEvent.OutputObject
    >;

    "DIDDeactivated(string)": TypedContractEvent<
      DIDDeactivatedEvent.InputTuple,
      DIDDeactivatedEvent.OutputTuple,
      DIDDeactivatedEvent.OutputObject
    >;
    DIDDeactivated: TypedContractEvent<
      DIDDeactivatedEvent.InputTuple,
      DIDDeactivatedEvent.OutputTuple,
      DIDDeactivatedEvent.OutputObject
    >;

    "DIDUpdated(string)": TypedContractEvent<
      DIDUpdatedEvent.InputTuple,
      DIDUpdatedEvent.OutputTuple,
      DIDUpdatedEvent.OutputObject
    >;
    DIDUpdated: TypedContractEvent<
      DIDUpdatedEvent.InputTuple,
      DIDUpdatedEvent.OutputTuple,
      DIDUpdatedEvent.OutputObject
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
