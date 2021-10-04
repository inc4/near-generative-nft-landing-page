import React from 'react';

const GenerateSoldOut = () => (
  <div className="generate-sold-out">
    <p className="generate-sold-out__text">SoldOut</p>
    <a
      className="generate-sold-out__link"
      href="https://www.mintbase.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Buy on Mintbase</p>
      <img
        src="./images/generate-mintbase.png"
        alt="mintbase marketplace"
        className="generate-sold-out__img"
      ></img>
    </a>
  </div>
);

export default GenerateSoldOut;
