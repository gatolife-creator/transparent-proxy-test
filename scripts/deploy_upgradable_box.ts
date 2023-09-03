import { ethers, upgrades } from "hardhat";

const main = async () => {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  await box.waitForDeployment();
  console.log("Box deployed to:", await box.getAddress());
};

main();
