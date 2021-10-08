/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const ShareableCircle = ({ activeLinkForShare, index, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(index)}
    className={`shareable-circle ${
      index === activeLinkForShare ? 'shareable-circle__active' : ''
    }`}
  ></button>
);

ShareableCircle.propTypes = {
  activeLinkForShare: PropTypes.number,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export default ShareableCircle;
