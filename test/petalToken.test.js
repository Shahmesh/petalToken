const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require('chai');
const { getContractAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

// Start test block
describe('Petal', function () {
  before(async function () {
    this.Petal = await ethers.getContractFactory('Petal');
  });

  beforeEach(async function () {
    this.petalInstance = await this.Petal.deploy();
    await this.petalInstance.deployed();
  });

  // Test cases

  it('Creates a token with a name', async function () {
    expect(await this.petalInstance.name()).to.exist;
    // expect(await this.roselexInstance.name()).to.equal('Roselex');
  });

  it('Creates a token with a symbol', async function () {
    expect(await this.petalInstance.symbol()).to.exist;
    // expect(await this.roselexInstance.symbol()).to.equal('RSLX');
  }); 

});