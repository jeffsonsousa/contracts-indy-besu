// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

enum Status {
    active,
    suspended,
    revoked
}

/**
 * @title CredentialDefinitionWithMetadata
 * @dev This struct holds the details of a credential definition
 * and its associated metadata.
 *
 * @param credDef - The details of the credential definition.
 * @param metadata - Additional metadata associated with the credential definition.
 */
struct RevocationWithMetadata {
    Revocation revocation;
    RevocationMetadata metadata;
}

/**
 * @title CredentialDefinition
 * @dev This struct holds the essential details of a credential definition.
 *
 * @param id - Unique identifier for the credential definition.
 * @param issuerId - Identifier for the issuer of the credential.
 * @param schemaId - Identifier for the schema associated with this credential definition.
 * @param credDefType - Type or of the credential definition.
 * @param tag - A tag or label associated with the credential definition.
 * @param value - The value of the credential definition.
 */

struct RevocationEntryWithMetadata {
    RevocationRegEntry revEntry;
    RevocationEntryMetadata metadata;
}

struct RevocationRegEntry {
    string revDefId;
    string regDefType;
    string  entry;
    string  issuerId;
}


struct RevocationEntryMetadata {
    uint256 created;
    address creator;
    uint256 updated;
}

struct Revocation {
    string id; // H(H(cred)|H(holder_account))
    string issuerId;
    string credDefId;
}

//   "ver": "1.0",
//                 "id": rev_reg_def_id,
//                 "revocDefType": revocation_registry_definition.type,
//                 "credDefId": revocation_registry_definition.cred_def_id,
//                 "tag": revocation_registry_definition.tag,
//                 "value": {
//                     "issuanceType": "ISSUANCE_BY_DEFAULT",
//                     "maxCredNum": revocation_registry_definition.value.max_cred_num,
//                     "publicKeys": revocation_registry_definition.value.public_keys,
//                     "tailsHash": revocation_registry_definition.value.tails_hash,
//                     "tailsLocation": revocation_registry_definition.value.tails_location,
//                 },

/**
 * @title CredentialDefinitionMetadata
 * @dev This struct holds additional metadata for a credential definition.
 *
 * @param created - Timestamp indicating when the credential definition was created.
 */
struct RevocationMetadata {
    uint256 created;
    address creator;
    uint256 updated;
    Status status;
}


struct RevocationReg {
    string ver;
    string id;
    string revocDefType;
    string credDefId;
    string tag;
    string value;
    string issuerId;

}

struct RevocationRegMetadata {
    uint256 created;
    address creator;
    uint256 updated;
}

struct RevocationRegWithMetadata {
    RevocationReg revocationReg;
    RevocationRegMetadata metadata;
}