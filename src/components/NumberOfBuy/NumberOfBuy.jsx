/* eslint-disable no-console */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BuyContext from '../../Contexts/BuyContext';

const NumberOfBuy = ({ number, isGift }) => {
  const { count, kind, handleClick } = useContext(BuyContext);
  const check = (isGift && kind === 'gift') || (!isGift && kind === 'buy');
  const isActive = number === count && check;

  return (
    <button
      type="button"
      data-kind={`${isGift ? 'gift' : 'buy'}`}
      onClick={handleClick}
      className={`number-buy ${number > 1 ? 'number-buy__many' : ''}
      ${isActive ? 'number-buy__active' : ''}
      `}
    >
      {number}
    </button>
  );
};

NumberOfBuy.propTypes = {
  number: PropTypes.number,
  isGift: PropTypes.bool,
};

NumberOfBuy.defaultProps = {
  number: 1,
  isGift: false,
};
export default NumberOfBuy;
