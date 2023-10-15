// import of chai library. chai is used to make assertions and expect is used to check if actions behaved as expected
// import of ethers from hardhat library. ethers is used for interaction with ethereum smart contracts.
const { expect } = require('chai');
const { ethers } = require('hardhat');

// describe function contains all the tests
describe('manNFT Contract', function () {
  let manNFT; // contract instance
  let otherContract; // Declare a variable for the contract you want to attach
  let owner; // owner's address
  let addr1; 
  let addr2;
  
  // before function runs once before any test
  before(async function () {
    // Deploy the contract and get accounts
    [owner, addr1, addr2] = await ethers.getSigners(); // getSighners is used to get ETH account objects
    const ManNFT = await ethers.getContractFactory('manNFT'); // ethers.getContractFactory() to get a contract factory for the manNFT contract.
    manNFT = await ManNFT.deploy(owner.address); // deploy the contract and save its instance in variable
    await manNFT.deployed(); // wait for the contract deployment

  });
  // test case if contract set the right owner
  it('Should set the right owner', async function () {
    expect(await manNFT.owner()).to.equal(owner.address); // here we expect manNFT.owner() to be equal to owner.address
  });
  // test case if contract mints nft
  it('Should mint a new NFT', async function () {
    const tokenId = 1; 
    const uri = 'https://example.com/nft-metadata/1.json'; // metadata of NFT
    // mint NFT on manNFT contract by connecting to the owner and nft is minted to addr1
    await manNFT.connect(owner).mint(addr1.address, tokenId, uri); 
    // check who owns specified NFT 
    const ownerOfToken = await manNFT.ownerOf(tokenId);
    expect(ownerOfToken).to.equal(addr1.address);

    const tokenURI = await manNFT.tokenURI(tokenId);
    expect(tokenURI).to.equal(uri);
  });
  // test case that checks whether non-owners can mint NFTs
  it('Should not allow minting by non-owners', async function () {
    const tokenId = 2;
    const uri = 'https://example.com/nft-metadata/2.json';
    // addr1 attempts to mint NFT and we expect that the error will appear
    await expect(manNFT.connect(addr1).mint(addr2.address, tokenId, uri)).to.be.revertedWith(
      'OwnableUnauthorizedAccount'
    );
  });
});
