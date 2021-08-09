import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

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

NearkatsListItem.propTypes = {
  kat: PropTypes.object,
};

export default NearkatsListItem;
