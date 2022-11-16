import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types"; 
import { hexStripZeros } from "ethers/lib/utils";

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { getNamedAccounts, deployments, network } hre;
    const { deploy, log } = deployments; 
    const { deployer } = await getNamedAccounts();
};

export default deployGovernanceToken;