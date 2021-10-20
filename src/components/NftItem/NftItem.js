/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';
import revealIcon from '../../assets/images/reveal.svg';
import rarity from '../../assets/images/rarity-common.svg';

const NftItem = ({ item, onClick, isHide }) => {
  const [reveal, setReveal] = useState(isHide);

  const handleClick = () => {
    setReveal(true);
    onClick({ [item.title]: true });
  };

  return (
    <div className="nft-item">
      {reveal ? (
        <>
          <img
            className="nft-item__img"
            src={`https://ipfs.io/ipfs/QmXxsVP5HahZEQFnfkXqmCHH3EXXdQeAUzenrTRpbQNeDb/${
              item.title % 10
            }/media.png`}
            alt="nearkat"
          />
          <div className="nft-item__footer">
            <p className="nft-item__hash"># {item?.title?.padStart(5, '0')}</p>
            <ReactSVG src={item.rarity || rarity} />
          </div>
          <NftItemInfo className="nft-item__info" item={item} />
        </>
      ) : (
        <li className="reveal__item" onClick={handleClick}>
          <div className="reveal__image">
            <ReactSVG className="reveal__icon" src={revealIcon} />

            <div className="reveal__question-sign">
              ?<span className="reveal__question-sign-big">?</span>?
            </div>
            <div className="reveal__text-hover">Reveal</div>
          </div>
          <div className="reveal__title">
            <span># {item?.title?.padStart(5, '0')}</span>
            <div className="reveal__question-grey">?</div>
          </div>
        </li>
      )}
    </div>
  );
};

NftItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  isHide: PropTypes.bool,
};

NftItem.defaultProps = {
  item: {},
  onClick: () => {},
};

export default NftItem;
