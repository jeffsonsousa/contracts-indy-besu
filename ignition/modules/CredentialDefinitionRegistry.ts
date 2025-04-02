import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const CredentialDefinitionRegistry = buildModule("CredentialDefinitionRegistry", (m) => {
  
  const CredentialDefinitionRegistry = m.contract("CredentialDefinitionRegistry");

  return { CredentialDefinitionRegistry };
});

export default CredentialDefinitionRegistry;



//npx hardhat ignition deploy ./ignition/modules/CredentialDefinitionRegistry.ts --network LocalHost