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

      const contract = getContract(account, contractMethods);

      let [discount, tenTokenCost, tokenStorage, oneTokenCost] =
        await Promise.all([
          contract.discount({
            num: 10,
          }),
          contract.total_cost({ num: 10 }),
          contract.token_storage_cost(),
          contract.cost_per_token({ num: 1 }),
        ]);

      const discountFormat = formatNearAmount(discount);
      const tenTokenFormat = formatNearAmount(tenTokenCost);
      const oneTokenFormat = formatNearAmount(oneTokenCost);
      const tokenStorageFormat = formatNearAmount(tokenStorage);

      const price = {
        oneToken: oneTokenFormat - tokenStorageFormat,
        tenToken: tenTokenFormat - 10 * tokenStorageFormat,
        tokenStorageFormat,
        discountFormat,
        tenTokenCost,
        oneTokenCost,
      };

      await update('', { near, wallet, account, contract, price });
      console.log('state:', getState());
    }

    await update('', { near, wallet, account });
  };
