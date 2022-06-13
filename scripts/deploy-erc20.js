const hre = require("hardhat");

async function main() {

  await hre.run('compile');
  const ERC20 = await hre.thor.getContractFactory("TestERC20");
  const erc20 = await ERC20.deploy();

  await erc20.deployed();
  console.log("ERC20 deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });