import React from 'react';
import PropTypes from 'prop-types';
import RateListItem from './RateListItem';

const RateList = ({ rates }) => (
  <div className="rate-list">
    {rates.length &&
      rates.map((rate) => <RateListItem key={rate.id} rate={rate} />)}
  </div>
);

RateList.propTypes = {
  rates: PropTypes.array,
};

export default RateList;
