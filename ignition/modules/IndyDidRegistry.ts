import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import "@nomicfoundation/hardhat-ignition-ethers";

const IndyDidRegistry = buildModule("IndyDidRegistry", (m) => {
  // Faça o deploy da biblioteca IndyDidValidator
  const IndyDidValidatorFuture = m.library("IndyDidValidator");

  // Faça o deploy do contrato IndyDidRegistry e passe a biblioteca como argumento
  const IndyDidRegistryFuture = m.contract("IndyDidRegistry", [], {
    libraries: {
      IndyDidValidator: ( IndyDidValidatorFuture)
    },
  });

  

  // Retorna o resultado com o futuro do contrato e a biblioteca
  return {
    IndyDidRegistry: IndyDidRegistryFuture,
    IndyDidValidator: IndyDidValidatorFuture,
  };
});

export default IndyDidRegistry;


//npx hardhat ignition deploy ./ignition/modules/IndyDidRegistry.ts --network LocalHost