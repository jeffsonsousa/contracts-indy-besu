// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

import { UniversalDidResolverInterface } from "../did/UniversalDidResolverInterface.sol";
import { ControlledUpgradeable } from "../upgrade/ControlledUpgradeable.sol";
import {RevocationRegistryInterface} from "../cl/RevocationRegistryInterface.sol";
import {CredentialDefinitionRegistryInterface} from "../cl/CredentialDefinitionRegistryInterface.sol";
import {RevocationWithMetadata, RevocationRegWithMetadata, RevocationRegEntry, RevocationReg, RevocationEntryWithMetadata, Revocation, Status} from "../cl/RevocationRegistryTypes.sol";
import { CLRegistry } from "../cl/CLRegistry.sol";
import { DidMetadata } from "../did/DidTypes.sol";
import {SenderIsNotCreator} from "../did/DidErrors.sol";
import { RevocationNotFound, RevocationAlreadyExist } from "../cl/ClErrors.sol";
import {SenderIsNotCreator,  DidNotFound, IncorrectDid} from "../did/DidErrors.sol";
import { InvalidIssuerId, IssuerHasBeenDeactivated, IssuerNotFound, SenderIsNotIssuerDidOwner } from "../cl/ClErrors.sol";
import { Errors } from "../utils/Errors.sol";
// using RevocationValidator for Revocation;

contract RevocationRegistry is RevocationRegistryInterface, ControlledUpgradeable {
    /**
     * @dev Reference to the contract that manages anoncreds credDefs
     */
    CredentialDefinitionRegistryInterface private _credDefRegistry;
        UniversalDidResolverInterface private _didResolver;

    /**
     * Mapping Credential Definition ID to its Credential Definition Details and Metadata.
     */
    mapping (string id => RevocationWithMetadata revWithMetadata) private _revs;
    mapping (string id => RevocationEntryWithMetadata entryWithMetadata) private _entries;
    mapping (string id => RevocationRegWithMetadata revRegWithMetadata) private _revReg;

    /**
     * Checks that the credential definition exist
     */
    modifier _revocationExist(string memory id) {
        if (_revReg[id].metadata.created == 0) revert RevocationNotFound(id);
        _;
    }

    modifier _revocationListExist(string memory id) {
        if (_entries[id].metadata.created == 0) revert RevocationNotFound(id);
        _;
    }

    modifier _uniqueRev(string memory id) {
        if (_revs[id].metadata.created != 0) revert RevocationAlreadyExist(id);
        _;
    }


    modifier _uniqueRevId(string memory id) {
        if (_revs[id].metadata.created != 0) revert RevocationAlreadyExist(id);
        _;
    }

    /**
     * Сhecks that the credDef exist
     */
    modifier _credExist(string memory id) {
        _credDefRegistry.resolveCredentialDefinition(id);
        _;
    }

       modifier _senderIsCreatorRev(string memory id) {
        if (msg.sender != _revs[id].metadata.creator)
            revert SenderIsNotCreator(msg.sender, _revs[id].metadata.creator);
        _;
    }

    function initialize(
        address upgradeControlAddress,
        address didResolverAddress,
        address credDefRegistryAddress
    ) public reinitializer(1) {
        _initializeUpgradeControl(upgradeControlAddress);
        _didResolver = UniversalDidResolverInterface(didResolverAddress);
        _credDefRegistry = CredentialDefinitionRegistryInterface(credDefRegistryAddress);
    }

      function revokeCredential(
        string calldata id
        ) public virtual _revocationExist(id) _senderIsCreatorRev(id){
        _revs[id].metadata.status = Status.revoked;
        _revs[id].metadata.updated = block.timestamp;

            
        // Emit an event or perform any necessary actions
        emit CredentialRevoked(id, msg.sender);
    }

    modifier _validIssuerDid(string memory id) {
        try _didResolver.resolveMetadata(id) returns (DidMetadata memory metadata) {
            if (msg.sender != metadata.creator) {
                revert SenderIsNotIssuerDidOwner(msg.sender, metadata.creator);
            }
            if (metadata.deactivated) revert IssuerHasBeenDeactivated(id);
        } catch (bytes memory reason) {
            if (Errors.equals(reason, DidNotFound.selector)) revert IssuerNotFound(id);
            if (Errors.equals(reason, IncorrectDid.selector)) revert InvalidIssuerId(id);

            Errors.rethrow(reason);
        }
        _;
    }

    /// @inheritdoc RevocationRegistryInterface
    function createRevocation(
        Revocation calldata _revocation
    ) public virtual _uniqueRevId(_revocation.id) _validIssuerDid(_revocation.issuerId) _credExist(_revocation.credDefId) {
        _revs[_revocation.id].revocation = _revocation;
        _revs[_revocation.id].metadata.created = block.timestamp;
        _revs[_revocation.id].metadata.creator = msg.sender;
        _revs[_revocation.id].metadata.updated = block.timestamp;
        _revs[_revocation.id].metadata.status = Status.active;

        emit RevocationCreated(_revocation.id, msg.sender);
    }

    function createRevocationRegistry(
        RevocationReg calldata revRegistry
    ) public virtual _uniqueRevId(revRegistry.id) _validIssuerDid(revRegistry.issuerId) _credExist(revRegistry.credDefId) {
        _revReg[revRegistry.id].revocationReg = revRegistry;
        _revReg[revRegistry.id].metadata.created = block.timestamp;
        _revReg[revRegistry.id].metadata.creator = msg.sender;
        _revReg[revRegistry.id].metadata.updated = block.timestamp;

        emit RevocationCreated(revRegistry.id, msg.sender);
    }

    function createOrUpdateEntry(
        RevocationRegEntry calldata revEntry
    ) public virtual _validIssuerDid(revEntry.issuerId){
        _entries[revEntry.revDefId].revEntry = revEntry;
        _entries[revEntry.revDefId].metadata.created = block.timestamp;
        _entries[revEntry.revDefId].metadata.creator = msg.sender;
        _entries[revEntry.revDefId].metadata.updated = block.timestamp;

        emit RevListCreated(revEntry.revDefId, msg.sender);
    }

    /// @inheritdoc RevocationRegistryInterface
    function resolveRevocation(
        string calldata id
    ) public view virtual _revocationExist(id) returns (RevocationRegWithMetadata memory revWithMetadata) {
        return _revReg[id];
    }

    function resolveEntry(
        string calldata id
    ) public view virtual _revocationListExist(id) returns (RevocationEntryWithMetadata memory revEntryMetadata){
        return _entries[id];
    }
}