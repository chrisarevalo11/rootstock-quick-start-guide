require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    rskTestnet: {
      url: "https://rpc.testnet.rootstock.io/TK8N1PFBB8TaMqnaU77oSn7W2G0Tpp-T",
      chainId: 31,
      gasPrice: 60000000,
      accounts: [process.env.ROOTSTOCK_TESTNET_PRIVATE_KEY],
    },
  },
};
