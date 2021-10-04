import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <div className="price">
    <span className="price__near">Ⓝ</span>
    <span className="price__count">{price}</span>
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
