/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { generate as id } from 'shortid';
import { NEAR } from 'near-units';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { GAS } from '../state/near';
import { appStore } from '../state/app';

const useLinkDrop = () => {
  const history = useHistory();

  const { state, update } = useContext(appStore);
  const { contract } = state;
  const { app } = state;

  const WALLET_URL = (account, key, url) =>
    `https://wallet.testnet.near.org/linkdrop/${account}/${key}?redirectUrl=${url}`;

  const createLinkDrop = async (count) => {
    const keyPair = KeyPairEd25519.fromRandom();

    const url = WALLET_URL(
      contract.account.accountId,
      keyPair.secretKey.toString(),
      window.location.href,
    );

    const { linkDropArray } = app;
    localStorage.setItem(
      'linkDropArray',
      JSON.stringify([...linkDropArray, { link: url, text: '', id: id() }]),
    );

    const cost = await contract.total_cost({ num: 1 });

    contract.create_linkdrop(
      {
        public_key: keyPair.getPublicKey().toString(),
      },
      GAS,
      NEAR.parse('2').add(NEAR.from(cost)),
    );
    history.push('/link-drop');
  };
  return { createLinkDrop };
};

export default useLinkDrop;
