import React from 'react';
import PropTypes from 'prop-types';

const GenerateCountBtn = ({ count, isActive, onClick, className }) => {
  const classCount = count > 1 ? 'generate-count-btn__many' : '';
  const classActive = isActive ? 'generate-count-btn__active' : '';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`generate-count-btn ${classCount} ${classActive} ${className}`}
    >
      <p>{count}</p>
    </button>
  );
};

GenerateCountBtn.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

GenerateCountBtn.defaultProps = {
  count: 1,
  onClick: () => {},
  className: '',
  isActive: false,
};

export default GenerateCountBtn;
