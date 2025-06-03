import { ethers } from 'ethers';
// import { ABI } from '../contract';

const AddNewEvent = (eventFilter, provider, cd) => {
  provider.removelistener(eventFilter);

  provider.on(eventFilter, (logs) => {
    const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(logs);

    cb(parsedLog);
  })
}

export const createEventListeners = ({
  navigate, contract, provider, walletAddress, setShowAlert
}) => {
  const NewPlayerEventFilter = contract.filters.NewPlayer();

  AddNewEvent(NewPlayerEventFilter, provider, () => {
    console.log('New player created!', args);

    if (walletAddress === args.owner) {
      setShowAlert({
        status: true,
        type: 'success',
        message: 'Player has been successfully registered.'
      });
    }
  });
}