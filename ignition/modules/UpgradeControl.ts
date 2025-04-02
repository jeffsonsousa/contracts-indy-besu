import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const UpgradeControl = buildModule("UpgradeControl", (m) => {
  
  const UpgradeControl = m.contract("UpgradeControl");

  return { UpgradeControl };
});

export default UpgradeControl;

// npx hardhat ignition deploy ./ignition/modules/UpgradeControl.ts --network LocalHost