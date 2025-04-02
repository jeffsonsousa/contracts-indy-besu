import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const SchemaRegistry = buildModule("SchemaRegistry", (m) => {
  
  const SchemaRegistry = m.contract("SchemaRegistry");

  return { SchemaRegistry };
});

export default SchemaRegistry;

//npx hardhat ignition deploy ./ignition/modules/SchemaRegistry.ts --network LocalHost