import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const NftItemInfo = ({ className, item, onMouseEnter, onMouseLeave }) => (
  <div
    className={`nft-item-info  ${className || ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div>Info about KAT</div>
    <ReactSVG src={item.icon} />
  </div>
);

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
};
export default NftItemInfo;
