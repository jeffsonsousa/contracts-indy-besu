import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    local: // Nome da sua rede
    {
      url: `http://127.0.0.1:8545`, // COLOQUE O IP E PORTA DE SUA REDE
      chainId: 381660001,
      accounts: ['0x17d03fd2be867379ac6cfa30d1d9fb4662fe52bc833f7bc49c24400ffe2ea6a8'] // SUA CHAVE PRIVADA
    }
  }

};

export default config;
