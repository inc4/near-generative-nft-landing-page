/* eslint-disable no-console */
import { generate as id } from 'shortid';
import kat1 from '../../assets/images/nfts-kat1.svg';
import kat2 from '../../assets/images/nfts-kat2.svg';
import kat3 from '../../assets/images/nfts-kat3.svg';
import kat4 from '../../assets/images/nfts-kat4.svg';

import veryRare from '../../assets/images/rarity-very-rare.svg';
import uncommon from '../../assets/images/rarity-uncommon.svg';
import superRare from '../../assets/images/rarity-super-rare.svg';
import common from '../../assets/images/rarity-common.svg';
import rare from '../../assets/images/rarity-rare.svg';

const katArr = [kat1, kat2, kat3, kat4];
const rarityArr = [veryRare, uncommon, superRare, common, rare];

function dataGenerate(count) {
  const arr = [];
  for (let i = 0; i < count; i += 1)
    arr.push({
      key: id(),
      icon: katArr[Math.round(Math.random() * 3)],
      number: '#0123456789',
      rarity: rarityArr[Math.round(Math.random() * 4)],
    });

  return arr;
}

export default dataGenerate(25);
