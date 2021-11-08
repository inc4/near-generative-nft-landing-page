/* eslint-disable */
import getConfig from '../config';
import * as nearAPI from 'near-api-js';
import { getWallet, getContract, getPrice } from '../utils/near-utils';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';

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

const linkmatcher =
  /https:\/\/wallet.testnet.near.org\/linkdrop\/[^/]+\/(?<key>.+)\?redirectUrl=/;

function getPublicKey(link) {
  const m = link.match(linkmatcher).groups.key;
  return KeyPairEd25519.fromString(m).getPublicKey();
}

export const initNear =
  () =>
  async ({ update, getState, dispatch }) => {
    try {
      const { near, wallet } = await getWallet();

      const price = await getPrice(near);

      wallet.signIn = (successUrl) => {
        wallet.requestSignIn({
          successUrl,
          contractId: contractName,
        });
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
          await contract.nft_supply_for_owner({
            account_id: account.accountId,
          }),
        );
        console.log(
          'nft_tokens_for_owner',
          await contract.nft_tokens_for_owner({
            account_id: account.accountId,
          }),
        );
        console.log('nft_total_supply', await contract.nft_total_supply());

        await update('', { near, wallet, account, contract, price });

        const nearkatsArray = await contract.nft_tokens_for_owner({
          account_id: account.accountId,
        });

        // take url for IPFS where data stored
        const { base_uri: urlIpfs } = await contract.nft_metadata();

        // update state with nearkats and url for IPFS
        const state = getState();

        // Updates link object if used or missing in contract
        const links = await Promise.all(
          state.app.linkDropArray.map(async (link) => {
            try {
              const key = getPublicKey(link.link).toString();
              await contract.get_key_balance({ key });
            } catch (err) {
              if (err.message.includes('Key is missing')) {
                link.isUsed = true;
              }
            }
            return link;
          }),
        );
        // state.app.linkDropArray = links.filter(link => !link.isUsed);
        const app = { ...state.app, nearkatsArray, urlIpfs };

        await update('', { app });
        console.log('state:', getState());

        return;
      }

      await update('', { near, wallet, account, price });
      console.log('state:', getState());
    } catch (e) {
      console.log('error:', e);
    }
  };
