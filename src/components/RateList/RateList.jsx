/* eslint-disable react/prop-types */
import React from 'react';
import RateListItem from './RateListItem';

const RateList = ({ rates }) => (
  <div className="rate-list">
    {rates.length &&
      rates.map((rate) => <RateListItem key={rate.id} rate={rate} />)}
  </div>
);

export default RateList;
