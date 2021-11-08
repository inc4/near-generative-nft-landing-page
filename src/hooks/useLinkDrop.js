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

  const walletUrl = (account, key, url) =>
    `https://wallet.testnet.near.org/linkdrop/${account}/${key}?redirectUrl=${url}/my-nfts`;

  const createLinkDrop = async (count) => {
    const keyPair = KeyPairEd25519.fromRandom();
    const currentUrl = window.location.origin;
    const url = walletUrl(
      contract.contractId,
      keyPair.secretKey.toString(),
      currentUrl,
    );

    const { linkDropArray } = app;

    localStorage.setItem(
      'linkDropArray',
      JSON.stringify([
        ...linkDropArray,
        { link: url, text: '', id: id(), isUsed: false },
      ]),
    );

    const cost = await contract.cost_of_linkdrop();
    const publicKey = keyPair.getPublicKey().toString();

    // history.push('/link-drop');
    await contract.create_linkdrop({
      args: { public_key: publicKey },
      gas: GAS,
      amount: cost,
      callbackUrl: `${currentUrl}/link-drop`,
    });
  };
  return { createLinkDrop };
};

export default useLinkDrop;
