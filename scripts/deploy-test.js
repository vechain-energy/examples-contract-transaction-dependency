const hre = require("hardhat");

async function main() {

  await hre.run('compile');
  const TestDependency = await hre.thor.getContractFactory("TestDependency");
  const test = await TestDependency.deploy();

  await test.deployed();
  console.log("TestDependency deployed to:", test.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });