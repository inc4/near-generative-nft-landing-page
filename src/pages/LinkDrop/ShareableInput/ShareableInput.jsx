import React, { useState } from 'react';

const ShareableInput = () => {
  const [value, setValue] = useState('events@generationcrypto.org');
  return (
    <input
      className="shareable-input"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default ShareableInput;
