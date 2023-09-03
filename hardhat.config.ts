import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";

dotenv.config();

if (process.env.PRIVATE_KEY === undefined) {
  console.log("private key is missing");
}

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
