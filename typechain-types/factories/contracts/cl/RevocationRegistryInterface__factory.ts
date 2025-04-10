/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  RevocationRegistryInterface,
  RevocationRegistryInterfaceInterface,
} from "../../../contracts/cl/RevocationRegistryInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "RevocationId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CredentialRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "RevocationId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CredentialUnrevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "RevRegId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RevListCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "RevocationId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RevocationCreated",
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
            name: "credDefId",
            type: "string",
          },
        ],
        internalType: "struct Revocation",
        name: "credDef",
        type: "tuple",
      },
    ],
    name: "createRevocation",
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
    name: "resolveRevocation",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "ver",
                type: "string",
              },
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "revocDefType",
                type: "string",
              },
              {
                internalType: "string",
                name: "credDefId",
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
              {
                internalType: "string",
                name: "issuerId",
                type: "string",
              },
            ],
            internalType: "struct RevocationReg",
            name: "revocationReg",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "created",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "updated",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRegMetadata",
            name: "metadata",
            type: "tuple",
          },
        ],
        internalType: "struct RevocationRegWithMetadata",
        name: "credDefWithMetadata",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class RevocationRegistryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): RevocationRegistryInterfaceInterface {
    return new Interface(_abi) as RevocationRegistryInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RevocationRegistryInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as RevocationRegistryInterface;
  }
}
