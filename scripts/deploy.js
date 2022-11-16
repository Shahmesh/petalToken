async function main() {
  
    // Get the contract owner
    const contractOwner = await ethers.getSigners();
    console.log(`Deploying contract from: ${contractOwner[0].address}`);
  
    // Hardhat helper to get the ethers contractFactory object
    const Petal = await hre.ethers.getContractFactory("Petal");
    
    // Deploy contract
    const petalInstance = await Petal.deploy();
    await petalInstance.deployed();
  
    console.log(
      `Deployed contract at ${Petal.address}`
    );
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });