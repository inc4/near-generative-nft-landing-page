import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ShareableInput = ({ text, onChange, index }) => {
  const [value, setValue] = useState(text);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <input
      className="shareable-input"
      data-index={index}
      onChange={handleChange}
      value={value}
      placeholder="Enter text"
    />
  );
};

ShareableInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  index: PropTypes.number,
};

ShareableInput.defaultProps = {
  text: '',
  onChange: () => {},
  index: undefined,
};

export default ShareableInput;
