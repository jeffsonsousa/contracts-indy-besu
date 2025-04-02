/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  CredentialDefinitionRegistryInterface,
  CredentialDefinitionRegistryInterfaceInterface,
} from "../../../contracts/cl/CredentialDefinitionRegistryInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "credentialDefinitionId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CredentialDefinitionCreated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "schemaId",
            type: "string",
          },
          {
            internalType: "string",
            name: "credDefType",
            type: "string",
          },
          {
            internalType: "string",
            name: "tag",
            type: "string",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
        ],
        internalType: "struct CredentialDefinition",
        name: "credDef",
        type: "tuple",
      },
    ],
    name: "createCredentialDefinition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "resolveCredentialDefinition",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "issuerId",
                type: "string",
              },
              {
                internalType: "string",
                name: "schemaId",
                type: "string",
              },
              {
                internalType: "string",
                name: "credDefType",
                type: "string",
              },
              {
                internalType: "string",
                name: "tag",
                type: "string",
              },
              {
                internalType: "string",
                name: "value",
                type: "string",
              },
            ],
            internalType: "struct CredentialDefinition",
            name: "credDef",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "created",
                type: "uint256",
              },
            ],
            internalType: "struct CredentialDefinitionMetadata",
            name: "metadata",
            type: "tuple",
          },
        ],
        internalType: "struct CredentialDefinitionWithMetadata",
        name: "credDefWithMetadata",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class CredentialDefinitionRegistryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): CredentialDefinitionRegistryInterfaceInterface {
    return new Interface(
      _abi
    ) as CredentialDefinitionRegistryInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CredentialDefinitionRegistryInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CredentialDefinitionRegistryInterface;
  }
}
