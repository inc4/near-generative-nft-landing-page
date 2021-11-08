/* eslint-disable camelcase */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appStore } from '../state/app';

const useTransfer = () => {
  const history = useHistory();

  const { state } = useContext(appStore);
  const { contract } = state;

  const nftTransfer = async () => {
    /* eslint-disable-next-line */
    const token_id = prompt('NFT ID');
    /* eslint-disable-next-line */
    const receiver_id = prompt('Account to send to');
    if (
      token_id === null ||
      token_id === '' ||
      receiver_id === '' ||
      receiver_id === null
    ) {
      return;
    }
    /* eslint-disable-next-line */
    await contract.nft_transfer({
      args: { receiver_id, token_id },
      amount: '1',
    });
    history.push('/my-nfts');
  };
  return { nftTransfer };
};

export default useTransfer;
