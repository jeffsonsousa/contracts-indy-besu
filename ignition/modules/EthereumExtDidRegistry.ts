import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EthereumExtDidRegistry = buildModule("EthereumExtDidRegistry", (m) => {
  
  const EthereumExtDidRegistry = m.contract("EthereumExtDidRegistry");

  return { EthereumExtDidRegistry };
});

export default EthereumExtDidRegistry;



//npx hardhat ignition deploy ./ignition/modules/EthereumExtDidRegistry.ts --network LocalHost