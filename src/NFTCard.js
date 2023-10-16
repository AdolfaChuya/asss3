import React from 'react';

function NFTCard({ nftData }) {
  return (
    <div className="nft-card">
      <img src={nftData.image} alt={nftData.name} />
      <h3>{nftData.name}</h3>
      <p>Description: {nftData.description}</p>
      {/* Add more attributes as needed */}
    </div>
  );
}

export default NFTCard;
