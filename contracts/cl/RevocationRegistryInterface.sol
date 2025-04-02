// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

import { Revocation, RevocationWithMetadata, RevocationRegWithMetadata } from "./RevocationRegistryTypes.sol";

interface RevocationRegistryInterface {
    /**
     * @dev Event that is sent when a Credential Definition is created
     *
     * @param RevocationId Created Schema ID
     * @param sender Sender's address
     */
    event RevocationCreated(string RevocationId, address indexed sender);
    event CredentialRevoked(string RevocationId, address indexed sender);
    event CredentialUnrevoked(string RevocationId, address indexed sender);
    event RevListCreated(string RevRegId, address indexed sender);

    /**
     * @dev Creates a new Credential Definition.
     *
     * Once the Credential Definition is created, this function emits a `RevocationCreated` event
     * with the new Credential Definition's ID and the message sender's address.
     *
     * This function can revert with following errors:
     * - `RevocationAlreadyExist`: Raised if Credential Definition with provided ID already exist.
     * - `SchemaNotFound`: Raised if the associated schema doesn't exist.
     * - `IssuerNotFound`: Raised if the associated issuer doesn't exist.
     * - `IssuerHasBeenDeactivated`: Raised if the associated issuer is not active.
     * - `InvalidRevocationId`: Raised if the Credential Definition ID syntax is invalid.
     * - `FieldRequired`: Raised when a mandatory Credential Definition field such as `type`, `tag` or `value` is not provided
     * - `SenderIsNotIssuerDidOwner`: Raised when an issuer DID specified in Revocation is not owned by sender
     *
     * @param credDef The new AnonCreds Credential Definition.
     */
    function createRevocation(Revocation calldata credDef) external;

    /**
     * @dev Resolve the Credential Definition associated with the given ID.
     *
     * If no matching Credential Definition is found, the function revert with `RevocationNotFound` error
     *
     * @param id The ID of the Credential Definition to be resolved.
     * @return credDefWithMetadata Returns the credential definition with metadata.
     */
    function resolveRevocation(
        string calldata id
    ) external returns (RevocationRegWithMetadata memory credDefWithMetadata);
}