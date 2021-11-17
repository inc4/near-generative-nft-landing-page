import React from 'react';
import PropTypes from 'prop-types';
import useBuy from '../../hooks/useBuy';

const Price = ({ price, className }) => {
  const { formatPrice } = useBuy();
  return (
    <div className="price">
      <span className="price__near">Ⓝ</span>
      <span className={`price__count ${className}`}>{formatPrice(price)}</span>
    </div>
  );
};
Price.propTypes = {
  price: PropTypes.number,
  className: PropTypes.string,
};

export default Price;
