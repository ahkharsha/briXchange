require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    bnbTestnet: {
      url: `https://bsc-testnet-rpc.publicnode.com`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
