import { ethers, upgrades } from "hardhat";

const main = async () => {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy(
    "0xd5476Aba9a2aaC3fb9B381FA2a93E01c8EF7C9e1",
    BoxV2
  );
  console.log("Box upgraded");
};

main();
