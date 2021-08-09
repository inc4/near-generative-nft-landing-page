import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const RateListItem = ({ rate }) => (
  <div className="rate-item">
    <div className="rate-item__count">{rate.count}</div>
    <ReactSVG className="rate-item__icon" src={rate.svgIcon} />
    <p className="rate-item__text">{rate.text}</p>
  </div>
);

RateListItem.defaultProps = {
  rate: PropTypes.object,
};

RateListItem.propTypes = {
  rate: PropTypes.shape({
    count: PropTypes.string,
    svgIcon: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default RateListItem;
