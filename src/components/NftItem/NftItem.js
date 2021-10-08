/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';
import revealIcon from '../../assets/images/reveal.svg';

const NftItem = ({ item, onClick, index }) =>
  item.reveal ? (
    <div className="nft-item">
      <ReactSVG className="nft-item__icon" src={item.icon} />
      <div className="nft-item__footer">
        <p className="nft-item__hash">{item.number}</p>
        <ReactSVG src={item.rarity} />
      </div>
      <NftItemInfo className="nft-item__info" item={item} />
    </div>
  ) : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className="reveal__item" onClick={() => onClick(index)}>
      <div className="reveal__image">
        <ReactSVG className="reveal__icon" src={revealIcon} />
        <div className="reveal__question-sign">
          ?<span className="reveal__question-sign-big">?</span>?
        </div>
        <div className="reveal__text-hover">Reveal</div>
      </div>
      <div className="reveal__title">
        <span>#100004440</span>
        <div className="reveal__question-grey">?</div>
      </div>
    </li>
  );

NftItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

NftItem.defaultProps = {
  item: {},
  onClick: () => {},
  index: 0,
};

export default NftItem;
