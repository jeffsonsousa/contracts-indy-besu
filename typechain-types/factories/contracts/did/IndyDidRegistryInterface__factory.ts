/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IndyDidRegistryInterface,
  IndyDidRegistryInterfaceInterface,
} from "../../../contracts/did/IndyDidRegistryInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "DIDCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "DIDDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "DIDUpdated",
    type: "event",
  },
  {
    inputs: [
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
    name: "createDid",
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
    name: "deactivateDid",
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
    name: "resolveDid",
    outputs: [
      {
        components: [
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
        internalType: "struct DidDocumentStorage",
        name: "didDocumentStorage",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "updateDid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IndyDidRegistryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IndyDidRegistryInterfaceInterface {
    return new Interface(_abi) as IndyDidRegistryInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IndyDidRegistryInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IndyDidRegistryInterface;
  }
}
