import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import rarity from '../../assets/images/rarity-common.svg';

const NftItemInfo = ({ className, item }) => {
  const nftInfo = useRef();

  useEffect(() => {
    const { right } = nftInfo?.current?.getBoundingClientRect();

    if (right > window.innerWidth) {
      nftInfo.current.style.transform = 'translateX(-100%)';
    }
  }, []);

  return (
    <div ref={nftInfo} className={`nft-item-info  ${className || ''}`}>
      <div className="nft-item-info__icon-wrapper">
        <div className="nft-item-info__image-wrapper">
          <img
            className="nft-item-info__image"
            src={`https://ipfs.io/ipfs/QmXxsVP5HahZEQFnfkXqmCHH3EXXdQeAUzenrTRpbQNeDb/${
              item.title % 10
            }/media.png`}
            alt="nearkat"
          />
        </div>
        <p className="nft-item-info__number">
          # {item?.title?.padStart(5, '0')}
        </p>
        <ReactSVG
          className="nft-item-info__rarity"
          src={item.rarity || rarity}
        />
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
};

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};
export default NftItemInfo;
