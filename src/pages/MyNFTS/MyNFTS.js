import React from 'react';
import NftList from '../../components/NftList/NftList';
import data from './dataNfts';

const MyNFTS = () => (
  <div className="my-nfts">
    <div className="my-nfts__data">
      <NftList list={data} />
    </div>
  </div>
);

export default MyNFTS;
