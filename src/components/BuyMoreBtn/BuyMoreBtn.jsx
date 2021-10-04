import React from 'react';
import PropTypes from 'prop-types';

const BuyMoreBtn = ({ className, text, onClick }) => (
  <button
    type="button"
    className={`buy-more-btn ${className || ''}`}
    onClick={onClick}
  >
    {text}
  </button>
);

BuyMoreBtn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

BuyMoreBtn.defaultProps = {
  onClick: () => {},
};

export default BuyMoreBtn;
