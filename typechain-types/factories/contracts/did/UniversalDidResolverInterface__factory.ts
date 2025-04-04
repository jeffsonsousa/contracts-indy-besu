/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  UniversalDidResolverInterface,
  UniversalDidResolverInterfaceInterface,
} from "../../../contracts/did/UniversalDidResolverInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "resolveDocument",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "context",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "controller",
            type: "string[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "verificationMethodType",
                type: "string",
              },
              {
                internalType: "string",
                name: "controller",
                type: "string",
              },
              {
                internalType: "string",
                name: "publicKeyJwk",
                type: "string",
              },
              {
                internalType: "string",
                name: "publicKeyMultibase",
                type: "string",
              },
            ],
            internalType: "struct VerificationMethod[]",
            name: "verificationMethod",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "authentication",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "assertionMethod",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "capabilityInvocation",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "capabilityDelegation",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "keyAgreement",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "serviceType",
                type: "string",
              },
              {
                internalType: "string",
                name: "serviceEndpoint",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "accept",
                type: "string[]",
              },
              {
                internalType: "string[]",
                name: "routingKeys",
                type: "string[]",
              },
            ],
            internalType: "struct Service[]",
            name: "service",
            type: "tuple[]",
          },
          {
            internalType: "string[]",
            name: "alsoKnownAs",
            type: "string[]",
          },
        ],
        internalType: "struct DidDocument",
        name: "document",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "resolveMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "created",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updated",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deactivated",
            type: "bool",
          },
        ],
        internalType: "struct DidMetadata",
        name: "metadata",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class UniversalDidResolverInterface__factory {
  static readonly abi = _abi;
  static createInterface(): UniversalDidResolverInterfaceInterface {
    return new Interface(_abi) as UniversalDidResolverInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UniversalDidResolverInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as UniversalDidResolverInterface;
  }
}
