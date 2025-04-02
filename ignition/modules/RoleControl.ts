import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";




const RoleControl = buildModule("RoleControl", (m) => {
  
  const RoleControl = m.contract("RoleControl");

  return { RoleControl };
});

export default RoleControl;

//npx hardhat ignition deploy ./ignition/modules/RoleControl.ts --network LocalHost