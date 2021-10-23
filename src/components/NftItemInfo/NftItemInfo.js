import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import rarity from '../../assets/images/rarity-common.svg';

const NftItemInfo = ({ className, item, urlIpfs }) => {
  const nftInfo = useRef();
  const [info, setInfo] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${urlIpfs}/${item.reference}`);
      const data = await response.json();

      setInfo(data.extra);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, []);

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
            src={`${urlIpfs}/${item.media}`}
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
        {info.map((infoItem) => (
          <p key={infoItem.value + NftItemInfo.trait_type}>
            {infoItem.trait_type} : {infoItem.value}
          </p>
        ))}
      </div>
    </div>
  );
};

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  urlIpfs: PropTypes.string,
};
export default NftItemInfo;
