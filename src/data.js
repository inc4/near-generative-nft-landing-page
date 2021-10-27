import { NEAR } from 'near-units';
import { KeyPairEd25519 } from 'near-api-js/lib/utils/key_pair';
import { GAS } from './state/near';

export function fakeLinkDropGenerate(contract) {
  const keyPair = KeyPairEd25519.fromRandom();
  const url = WALLET_URL(
    contract.account.accountId,
    keyPair.secretKey.toString(),
    window.location.href,
  );
}

const WALLET_URL = (account, key, url) =>
  `https://wallet.testnet.near.org/linkdrop/${account}/${key}?redirectUrl=${url}`;

export async function linkDropGenerate(contract) {
  const keyPair = KeyPairEd25519.fromRandom();
  console.log('keyPait:', keyPair);

  const cost = await contract.total_cost({ num: 1 });

  const url = WALLET_URL(
    contract.contractId,
    keyPair.secretKey.toString(),
    window.location.href,
  );

  const linkDropArray = JSON.parse(localStorage.getItem('linkDropArray'));
  localStorage.setItem('linkDropArray', [...linkDropArray, url]);

  await contract.create_linkdrop(
    {
      public_key: keyPair.getPublicKey().toString(),
    },
    GAS,
    NEAR.parse('2').add(NEAR.from(cost)),
  );

  return url;
}
