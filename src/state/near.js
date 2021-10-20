/* eslint-disable */
import getConfig from '../config';
import * as nearAPI from 'near-api-js';
import { getWallet, getContract, getPrice } from '../utils/near-utils';

export const {
  networkId,
  nodeUrl,
  walletUrl,
  GAS,
  contractName,
  contractMethods,
} = getConfig();

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

export const initNear =
  () =>
  async ({ update, getState, dispatch }) => {
    const { near, wallet } = await getWallet();

    const price = await getPrice(near);

    wallet.signIn = (successUrl) => {
      successUrl
        ? wallet.requestSignIn({
            successUrl,
          })
        : wallet.requestSignIn();
    };

    const signOut = wallet.signOut;
    wallet.signOut = () => {
      signOut.call(wallet);
      update('wallet.signedIn', false);
      update('', { account: null });
      localStorage.removeItem('undefined_wallet_auth_key');
      wallet.signedIn = wallet.isSignedIn();
      // new nearAPI.keyStores.BrowserLocalStorageKeyStore().clear()
    };

    wallet.signedIn = wallet.isSignedIn();

    let account;
    if (wallet.signedIn) {
      account = wallet.account();

      wallet.balance = formatNearAmount(
        (await wallet.account().getAccountBalance()).available,
        2,
      );

      // take information about NFT tokens
      const contract = getContract(account, contractMethods);

      console.log('tokens', await contract.tokens_left());
      console.log(
        'nft_supply_for_owner',
        await contract.nft_supply_for_owner({ account_id: account.accountId }),
      );
      console.log('nft_total_supply', await contract.nft_total_supply());
      let nearkatsArray;
      try {
        nearkatsArray = await contract.nft_tokens_for_owner({
          account_id: account.accountId,
        });
      } catch (e) {
        console.log('error:', e);
      }

      await update('', { near, wallet, account, contract, price });

      const state = getState();
      const app = { ...state.app, nearkatsArray };

      await update('', { app });
      console.log('state:', getState());

      return;
    }

    await update('', { near, wallet, account, price });
    console.log('state:', getState());
  };
