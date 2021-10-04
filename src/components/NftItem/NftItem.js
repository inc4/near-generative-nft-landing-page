/* eslint-disable no-console */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';

const NftItem = ({ item }) => {
  const [on, setOn] = useState(false);
  console.log('on: ', on);

  const onMouseEnter = () => {
    console.log('Enter');
    setOn(true);
  };

  const onMouseLeave = () => {
    setOn(false);
    console.log('Leave');
  };
  return (
    <div className="nft-item">
      <ReactSVG
        className="nft-item__icon"
        src={item.icon}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className="nft-item__footer">
        <p className="nft-item__hash">{item.number}</p>
        <ReactSVG src={item.rarity} />
      </div>
      {on && (
        <NftItemInfo
          className="nft-item__info"
          item={item}
          onMouseLeave={onMouseLeave}
        />
      )}
    </div>
  );
};

NftItem.propTypes = {
  item: PropTypes.object,
};

NftItem.defaultProps = {
  item: {},
};

export default NftItem;
