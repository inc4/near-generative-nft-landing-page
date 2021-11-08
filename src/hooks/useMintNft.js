/* eslint-disable no-alert */
import { useContext } from 'react';
import { appStore } from '../state/app';
import { GAS } from '../state/near';

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { contract, price } = state;

  const mintNft = async (count = 1) => {
    const callbackUrl = `${window.location.origin}/my-nfts`;
    if (count === 1) {
      contract.nft_mint_one({
        args: {},
        gas: GAS,
        amount: price.oneTokenCost,
        callbackUrl,
      });
    } else {
      const priceOfManyNfts = await contract.total_cost({ num: count });
      contract.nft_mint_many({
        args: { num: count },
        gas: GAS,
        amount: priceOfManyNfts,
        callbackUrl,
      });
    }
  };

  return { mintNft };
};

export default useMintNft;
