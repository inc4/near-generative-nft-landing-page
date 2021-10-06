/* eslint-disable no-console */
import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';

const NftItem = ({ item }) => (
  <div className="nft-item">
    <ReactSVG className="nft-item__icon" src={item.icon} />
    <div className="nft-item__footer">
      <p className="nft-item__hash">{item.number}</p>
      <ReactSVG src={item.rarity} />
    </div>
    <NftItemInfo className="nft-item__info" item={item} />
  </div>
);

NftItem.propTypes = {
  item: PropTypes.object,
};

NftItem.defaultProps = {
  item: {},
};

export default NftItem;
