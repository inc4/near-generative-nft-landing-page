/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../../BuyMoreBtn';
import NumberOfBuy from '../../NumberOfBuy';
import Price from '../../Price';

const BuyMore = ({ kind }) => {
  const text = kind === 'gift' ? 'Generate gift links' : 'Buy more';
  const isGift = kind === 'gift';

  return (
    <div className="buy-more">
      <div className="buy-more__top">
        <BuyMoreBtn text={text} />
        {isGift && (
          <p className="buy-more__top-text">
            Share a mystery NFT for your friend
          </p>
        )}
      </div>
      <div className="buy-more__center">
        <div className="buy-more__wrapper">
          <NumberOfBuy isGift={isGift} number={1} />
        </div>
        <Price price={5} />
      </div>
      <div className="buy-more__bottom">
        <div className="buy-more__wrapper">
          <NumberOfBuy isGift={isGift} number={10} />
        </div>
        <Price price={45} />
      </div>
    </div>
  );
};

BuyMore.propTypes = {
  kind: PropTypes.string,
};

BuyMore.defaultProps = {
  kind: 'buy',
};

export default BuyMore;
