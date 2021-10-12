import { generate as id } from 'shortid';
import { NEAR } from 'near-units';
import { KeyPairEd25519 } from 'near-api-js/lib/utils/key_pair';
import kat1 from './assets/images/nfts-kat1.svg';
import kat2 from './assets/images/nfts-kat2.svg';
import kat3 from './assets/images/nfts-kat3.svg';
import kat4 from './assets/images/nfts-kat4.svg';

import veryRare from './assets/images/rarity-very-rare.svg';
import uncommon from './assets/images/rarity-uncommon.svg';
import superRare from './assets/images/rarity-super-rare.svg';
import common from './assets/images/rarity-common.svg';
import rare from './assets/images/rarity-rare.svg';
import { GAS } from './state/near';

const katArr = [kat1, kat2, kat3, kat4];
const rarityArr = [veryRare, uncommon, superRare, common, rare];

export function nearkatGenerate(count) {
  const arr = [];
  for (let i = 0; i < count; i += 1)
    arr.push({
      key: id(),
      icon: katArr[Math.round(Math.random() * 3)],
      number: '#0123456789',
      rarity: rarityArr[Math.round(Math.random() * 4)],
      token_id: '2446',
      reveal: false,
    });

  return arr;
}

const WALLET_URL = (account, key, url) =>
  `https://wallet.testnet.near.org/linkdrop/${account}/${key}?redirectUrl=${url}`;

export async function linkDropGenerate(contract) {
  const keyPair = KeyPairEd25519.fromRandom();
  const cost = await contract.total_cost({ num: 1 });
  const url = WALLET_URL(
    contract.account,
    keyPair.secretKey.toString(),
    window.location.href,
  );
  // eslint-disable-next-line
  console.log(url);
  await contract.create_linkdrop(
    {
      public_key: keyPair.getPublicKey().toString(),
    },
    GAS,
    NEAR.parse('2').add(NEAR.from(cost)),
  );
  return url;
}
