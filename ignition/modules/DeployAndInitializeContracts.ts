import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import "@nomicfoundation/hardhat-ignition-ethers";

const DeployAll = buildModule("DeployAll", (m) => {
  // Faça o deploy da biblioteca IndyDidValidator
  const IndyDidValidatorFuture = m.library("IndyDidValidator");

  // Faça o deploy do contrato IndyDidRegistry e passe a biblioteca como argumento
  const IndyDidRegistryFuture = m.contract("IndyDidRegistry", [], {
    libraries: {
      IndyDidValidator: IndyDidValidatorFuture,
    },
  });

  // Faça o deploy dos outros contratos
  const AccountControlFuture = m.contract("AccountControl");
  const RoleControlFuture = m.contract("RoleControl");
  const SchemaRegistryFuture = m.contract("SchemaRegistry");
  const EthereumExtDidRegistryFuture = m.contract("EthereumExtDidRegistry");
  const UniversalDidResolverFuture = m.contract("UniversalDidResolver");
  const CredentialDefinitionRegistryFuture = m.contract("CredentialDefinitionRegistry");
  const RevocationRegistryFuture = m.contract("RevocationRegistry");
  const UpgradeControlFuture = m.contract("UpgradeControl");

  // Inicialize os contratos usando os endereços dos contratos já implantados
  m.call(AccountControlFuture, "initialize", [
    RoleControlFuture,
    UpgradeControlFuture,
  ]);

  m.call(RoleControlFuture, "initialize", [
    UpgradeControlFuture,
  ]);

  m.call(CredentialDefinitionRegistryFuture, "initialize", [
    UpgradeControlFuture,
    UniversalDidResolverFuture,
    SchemaRegistryFuture,
  ]);

  m.call(SchemaRegistryFuture, "initialize", [
    UpgradeControlFuture,
    UniversalDidResolverFuture,
  ]);

  m.call(RevocationRegistryFuture, "initialize", [
    UpgradeControlFuture,
    UniversalDidResolverFuture,
    CredentialDefinitionRegistryFuture,
  ]);

  m.call(EthereumExtDidRegistryFuture, "initialize", [
    UpgradeControlFuture,
  ]);

  m.call(IndyDidRegistryFuture, "initialize", [
    UpgradeControlFuture,
  ]);

  m.call(UniversalDidResolverFuture, "initialize", [
    UpgradeControlFuture,
    IndyDidRegistryFuture,
    EthereumExtDidRegistryFuture,
  ]);

  // Retorna o resultado com o futuro de todos os contratos e a biblioteca
  return {
    IndyDidRegistry: IndyDidRegistryFuture,
    IndyDidValidator: IndyDidValidatorFuture,
    AccountControl: AccountControlFuture,
    RoleControl: RoleControlFuture,
    SchemaRegistry: SchemaRegistryFuture,
    EthereumExtDidRegistry: EthereumExtDidRegistryFuture,
    UniversalDidResolver: UniversalDidResolverFuture,
    CredentialDefinitionRegistry: CredentialDefinitionRegistryFuture,
    RevocationRegistry: RevocationRegistryFuture,
    UpgradeControl: UpgradeControlFuture,
  };
});

export default DeployAll;
