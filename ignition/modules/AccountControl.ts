import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";




const AccountControl = buildModule("AccountControl", (m) => {
  
  const AccountControl = m.contract("AccountControl");

  return { AccountControl };
});

export default AccountControl;

//npx hardhat ignition deploy ./ignition/modules/AccountControl.ts --network LocalHost