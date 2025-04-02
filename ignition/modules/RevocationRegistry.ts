import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const RevocationRegistry = buildModule("RevocationRegistry", (m) => {
  
  const RevocationRegistry = m.contract("RevocationRegistry");

  return { RevocationRegistry };
});

export default RevocationRegistry;



/* OBS:
para compilar: npx hardhat compile,
para deploy :  npx hardhat ignition deploy ./ignition/modules/revoga.ts --network Iliada

se der erro ao fazer um novo deploy do contrato é necessario entrar em ignition/deployments/chain_1337/buid-info e apagar o conteudo do arquivo journal.jsonl*/