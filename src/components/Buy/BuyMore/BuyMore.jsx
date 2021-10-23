/* eslint-disable no-console */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../../BuyMoreBtn';
import useBuy from '../../../hooks/useBuy';
import CountAndPrice from './CountAndPrice';

const BuyMore = ({ isLinkDrop }) => {
  const {
    text,
    count,
    state,
    showMessage,
    showCountAnimation,
    handleClick,
    handleNumberClick,
  } = useBuy(isLinkDrop);

  const { price, app } = state;

  return (
    <div className="buy-more">
      <div className="buy-more__top">
        <BuyMoreBtn text={text} onClick={handleClick} />

        {showMessage && (
          <div className="buy-more__message">
            select {app.oneCount} or {app.manyCount} nearkats
          </div>
        )}
        {isLinkDrop && (
          <p className="buy-more__top-text">
            Share a mystery NFT for your friend
          </p>
        )}
      </div>

      <div className="buy-more__center">
        <CountAndPrice
          activeCount={count}
          handleNumberClick={handleNumberClick}
          showAnimation={showCountAnimation}
          price={price}
          currentCount={app.oneCount}
        />
      </div>

      {!isLinkDrop && (
        <div className="buy-more__bottom">
          <CountAndPrice
            activeCount={count}
            handleNumberClick={handleNumberClick}
            showAnimation={showCountAnimation}
            price={price}
            currentCount={app.manyCount}
          />
        </div>
      )}
    </div>
  );
};

BuyMore.propTypes = {
  isLinkDrop: PropTypes.bool,
};

BuyMore.defaultProps = {
  isLinkDrop: false,
};

export default memo(BuyMore);
