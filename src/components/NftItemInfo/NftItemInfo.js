import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const NftItemInfo = ({ className, item }) => (
  <div className={`nft-item-info  ${className || ''}`}>
    <div className="nft-item-info__icon-wrapper">
      <ReactSVG className="nft-item-info__icon" src={item.icon} />
      <p className="nft-item-info__number">{item.number}</p>
      <ReactSVG className="nft-item-info__rarity" src={item.rarity} />
    </div>
    <div className="nft-item-info__stats">
      <p>Name:&nbsp;Uncommon</p>
      <p>Head: </p>
      <p>Background: </p>
      <p>Clothing</p>
      <p>Generation</p>
      <p>Sequence</p>
      <p>Eyewear</p>
      <p>Fur / Skin </p>
      <p>Attribute Count</p>
      <p>Twin</p>
      <p>Mouth</p>
    </div>
  </div>
);

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};
export default NftItemInfo;
