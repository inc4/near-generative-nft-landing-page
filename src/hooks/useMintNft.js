/* eslint-disable no-alert */
import { useContext } from 'react';
import { appStore } from '../state/app';
import { GAS } from '../state/near';

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { contract, price } = state;

  const mintNft = async (count = 1) => {
    if (count === 1) {
      contract.nft_mint_one({}, GAS, price.oneTokenCost);
    } else {
      const priceOfManyNfts = await contract.total_cost({ num: count });
      contract.nft_mint_many({ num: count }, GAS, priceOfManyNfts);
    }
  };

  return { mintNft };
};

export default useMintNft;
