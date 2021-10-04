import React from 'react';
import NftList from '../../components/NftList/NftList';
import data from './dataNfts';
import Buy from '../../components/Buy';

const MyNFTS = () => (
  <div className="my-nfts">
    <div className="my-nfts__data">
      <NftList list={data} />
    </div>
    <Buy />
  </div>
);

export default MyNFTS;
