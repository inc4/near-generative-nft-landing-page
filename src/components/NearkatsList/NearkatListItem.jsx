/* eslint-disable react/prop-types */
import React from 'react';
import { ReactSVG } from 'react-svg';

const NearkatCard = ({ kat }) => (
  <div>
    <img src={kat.srcImg} alt="image_name" />
    <p>{kat.id} </p> <ReactSVG src={kat.svgRarityIcon} />
    <p>palette: {kat.palette}</p>
    <p>clothes: {kat.clothes}</p>
    <p>hat: {kat.hat}</p>
  </div>
);

export default NearkatCard;
