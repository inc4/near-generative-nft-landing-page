/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import NftItem from '../NftItem';

const NftList = ({ list }) => (
  <div className="nfts-list">
    {list.map((item) => (
      <NftItem key={item.key} item={item} />
    ))}
  </div>
);

NftList.propTypes = {
  list: PropTypes.array,
};
export default NftList;
