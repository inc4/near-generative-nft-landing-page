/* eslint-disable */
import getConfig from '../config';
import * as nearAPI from 'near-api-js';
import { getWallet, getContract } from '../utils/near-utils';

export const { networkId, nodeUrl, GAS, contractName, contractMethods } =
  getConfig();

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

export const initNear =
  () =>
  async ({ update, getState, dispatch }) => {
    const { near, wallet } = await getWallet();

    wallet.signIn = () => {
      wallet.requestSignIn();
    };
    const signOut = wallet.signOut;
    wallet.signOut = () => {
      signOut.call(wallet);
      update('wallet.signedIn', false);
      update('', { account: null });
      localStorage.clear();
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

      const contract = getContract(account, contractMethods);

      console.log('contract = ', contract);
      const discount = await contract.discount({
        num: 10,
      });
      const totalCost = await contract.total_cost({ num: 10 });
      const tokenStorageCost = await contract.token_storage_cost();
      const costPerToken = await contract.cost_per_token({ num: 1 });

      console.log('totalCost: ', totalCost);
      console.log('tokenStorageCost: ', tokenStorageCost);
      console.log('costPerToken: ', costPerToken);
      console.log('discount: ', discount);

      await update('', { near, wallet, account, contract });
    }

    await update('', { near, wallet, account });
  };
