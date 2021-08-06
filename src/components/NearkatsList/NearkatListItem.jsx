/* eslint-disable react/prop-types */
import React from 'react';
import { ReactSVG } from 'react-svg';

const NearkatsListItem = ({ kat }) => (
  <li className="nearkats-item">
    <img className="nearkats-item__img" src={kat.srcImg} alt="image_name" />
    <div className="nearkats-item__header">
      <p>#0123456789 </p>
      <ReactSVG src={kat.svgRarityIcon} />
    </div>
    <ReactSVG src={kat.svgRate} />
  </li>
);

export default NearkatsListItem;
