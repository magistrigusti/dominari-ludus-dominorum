import React from 'react';
import { PageHOC } from '../components'

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">DOMINARIUM</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
      <p className="text-xl p-3">Made with 💜 by Allodium Fondation</p>
    </div>
  )
};

export default PageHOC( Home,
  <>Welcome to DOMINARIUM <br/> a Web3 NFT Card Game </>,
  <>Connect your wallet to start playing <br/> the ultimate Web3 Battle Card Game </>
);