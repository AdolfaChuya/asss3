# Smart contract
The central feature of this contract is the mint function, which allows the contract owner to mint new NFTs. The mint function takes three parameters: the recipient's address, a unique token ID, and a URI pointing to the metadata associated with the NFT. This function creates new NFTs, assigns them to the recipient's address, and links the metadata to the tokens.

# Hardhat tests
This JavaScript code uses the Hardhat framework to test an Ethereum smart contract called "manNFT." Here's a description of what each part of the code does:

It imports the "expect" function from the Chai library, which is used for making assertions and checking if actions behaved as expected.

It imports the "ethers" library from Hardhat, which is used for interacting with Ethereum smart contracts.

It starts a test suite using the "describe" function, which contains all the individual test cases for the "manNFT" contract.

Inside the test suite, it declares several variables:

"manNFT" to hold an instance of the "manNFT" contract.
"otherContract" (though not used in this code).
"owner" to store the owner's Ethereum address.
"addr1" and "addr2" to store two other Ethereum addresses.
The "before" function runs once before any test cases are executed. In this function:

It deploys the "manNFT" contract and obtains Ethereum account objects for the owner and two other addresses.
It creates a contract factory for the "manNFT" contract.
It deploys the contract and saves its instance in the "manNFT" variable.
It waits for the contract deployment to complete.
The code includes multiple test cases within the test suite:

The first test case checks if the contract correctly sets the owner of the "manNFT" contract.
The second test case checks if the contract can mint a new NFT, including checking the ownership and URI of the NFT.
The third test case checks if the contract prevents non-owners from minting NFTs and expects a specific error message ("OwnableUnauthorizedAccount") to be reverted.
