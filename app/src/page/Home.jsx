import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components'

const Home = () => {
  const [playerName, setPlayerName] = useState();
  const { contract, walletAddress, setShowAlert } = useGlobalContext();

  const handleClick = async () => {
    try {
      console.log( contract );
      const playerExists = await contract.isPalyer(walletAddress);

      if (!playerExists) {
        await contract.registrPlayer(playerName, playerName);

        setShowAlert({
          status: 'true',
          type: 'info',
          message: `${playerName} is being summoned!`
        })
      }
    } catch (error) {
      alert(error);
    }
  } 

  return (
    <div className="flex flex-col" >
      <CustomInput 
        plaseholder="Enter your player name"
        label="Name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton 
        title="Reister"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  )
};

export default PageHOC( Home,
  <>Welcome to DOMINARIUM <br/> a Web3 NFT Card Game </>,
  <>Connect your wallet to start playing <br/> the ultimate Web3 Battle Card Game </>
);