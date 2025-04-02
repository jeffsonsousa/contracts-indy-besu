import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const UniversalDidResolver = buildModule("UniversalDidResolver", (m) => {
  
  const UniversalDidResolver = m.contract("UniversalDidResolver");

  return { UniversalDidResolver };
});

export default UniversalDidResolver;
//npx hardhat ignition deploy ./ignition/modules/UniversalDidResolver.ts --network LocalHost