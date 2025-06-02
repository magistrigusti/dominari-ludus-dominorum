import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components'

const Home = () => {
  const [playerName, setPlayerName] = useState();
  const { contract, walletAddress } = useGlobalContext();

  return (
    <div className="flex flex-col" >
      <CustomInput 
        plaseholder="Enter your player name"
        label="Name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
    </div>
  )
};

export default PageHOC( Home,
  <>Welcome to DOMINARIUM <br/> a Web3 NFT Card Game </>,
  <>Connect your wallet to start playing <br/> the ultimate Web3 Battle Card Game </>
);