import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CONTRACT_ABI from './contractABI.json';
import NFTCard from './NFTCard';

function NFTViewer() {
  const [account, setAccount] = useState('');
  const [userNFT, setUserNFTs] = useState('');

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
      } else {
        alert('Please install MetaMask to use this DApp.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchUserNFTs = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(CONTRACT_ABI, '0x197DB91CfbfA211183b8fb091bEB60E593EcD876');
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      console.log("User's NFTs:", userAddress);
      const userNFTs = await contract.methods.get
      console.log("User's NFTs:", userNFTs);
  
      if (userNFTs.length > 0) {
        const nftDataArray = [];
  
        for (const nftId of userNFTs) {
          const nftData = await fetchNFTData(contract, nftId);
          nftDataArray.push(nftData);
        }
  
        setUserNFTs(nftDataArray[0]);
        
      } else {
        console.log("User does not own any NFTs.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const fetchNFTData = async (contract, nftId) => {
    try {
      const nftDetails = await contract.methods.getNFTDetails(nftId).call();
      return nftDetails;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>NFT Viewer DApp</h1>
      <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      <button onClick={fetchUserNFTs}>Fetch NFTs</button>
      {account && <p>Connected Account: {account}</p>}
      
    </div>
  );
} 
export default NFTViewer;
