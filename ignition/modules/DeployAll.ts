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

  const AccountControlFuture = m.contract("AccountControl");
  const RoleControlFuture = m.contract("RoleControl");
  const SchemaRegistryFuture = m.contract("SchemaRegistry");
  const EthereumExtDidRegistryFuture = m.contract("EthereumExtDidRegistry");
  const UniversalDidResolverFuture = m.contract("UniversalDidResolver");
  const CredentialDefinitionRegistryFuture = m.contract("CredentialDefinitionRegistry");
  const RevocationRegistryFuture = m.contract("RevocationRegistry");
  const UpgradeControlFuture = m.contract("UpgradeControl");

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

//npx hardhat ignition deploy ./ignition/modules/DeployAll.ts --network LocalHost