import React from 'react';
import PropTypes from 'prop-types';

const GenerateSoldOut = ({ className }) => (
  <div className={`generate-sold-out ${className || ''}`}>
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

GenerateSoldOut.propTypes = {
  className: PropTypes.string,
};

GenerateSoldOut.defaultProps = {
  className: '',
};

export default GenerateSoldOut;
