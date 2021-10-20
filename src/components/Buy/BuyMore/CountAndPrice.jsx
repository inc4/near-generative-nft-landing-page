import React from 'react';
import PropTypes from 'prop-types';
import GenerateCountBtn from '../../GenerateCountBtn';
import Price from '../../Price';

const CountAndPrice = ({
  activeCount,
  handleNumberClick,
  showAnimation,
  price,
  currentCount,
}) => (
  <>
    <div className="buy-more__wrapper">
      <GenerateCountBtn
        count={currentCount}
        onClick={() => handleNumberClick(currentCount)}
        isActive={activeCount === currentCount}
      />
    </div>
    <Price
      price={currentCount === 1 ? price.oneNFT : price.manyNFTS}
      className={` ${activeCount === currentCount ? showAnimation : ''}`}
    />
  </>
);

CountAndPrice.propTypes = {
  activeCount: PropTypes.number,
  currentCount: PropTypes.number,
  handleNumberClick: PropTypes.func,
  showAnimation: PropTypes.string,
  price: PropTypes.object,
};
export default CountAndPrice;
