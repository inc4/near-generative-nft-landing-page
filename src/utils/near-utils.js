/* eslint-disable */
import * as nearAPI from 'near-api-js';
import getConfig from '../config';

export const {
  networkId, nodeUrl, walletUrl,
} = getConfig();

const {
  Account,
  Contract,
} = nearAPI;

export const formatAccountId = (accountId, len = 16) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len - 3)}...`;
  }
  return accountId;
};

export const getWallet = async () => {
  const near = await nearAPI.connect({
    networkId, nodeUrl, walletUrl, deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() },
  });
  const wallet = new nearAPI.WalletAccount(near);
  return { near, wallet };
};
