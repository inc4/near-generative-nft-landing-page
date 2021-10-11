import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SaveBtn = ({ onClick }) => {
  const [animation, setAnimation] = useState('');

  const handleClick = () => {
    setTimeout(() => setAnimation('save-btn__animation'), 0);
    setTimeout(() => setAnimation(''), 1000);
    onClick();
  };
  return (
    <button className="save-btn" type="button" onClick={handleClick}>
      Saved
      <p className={`save-btn__saved ${animation}`}>saved</p>
    </button>
  );
};

SaveBtn.propTypes = {
  onClick: PropTypes.func,
};

SaveBtn.defaultProps = {
  onClick: () => {},
};
export default SaveBtn;
