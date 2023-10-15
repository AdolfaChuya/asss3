// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

// Import of necessary contracts.
// Import of ERC721URIStorage contract, that allows store and control the metadata of NFT token
// Import of Ownable contract, which adds the access control to the owner
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// creation of a contract
contract manNFT is ERC721URIStorage, Ownable {

    // creation of a constructor
    constructor(address initialOwner) ERC721("manNFT", "MAN") Ownable(initialOwner) {}

    // function with 3 variables: receiver address, id of a token and link to metadata
    function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
        _mint(_to, _tokenId); // creates new token and assigns it to receiver address
        _setTokenURI(_tokenId, _uri); // links the metadata to token
    }
}