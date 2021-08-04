/* eslint-disable react/prop-types */
import React from 'react';
import { ReactSVG } from 'react-svg';

const RateListItem = ({ rate }) => (
  <div>
    <div>{rate.count}</div>
    <ReactSVG src={rate.svgIcon} />
    <p>{rate.text}</p>
  </div>
);

export default RateListItem;
