import React, { useState } from 'react';

const SaveBtn = () => {
  const [animation, setAnimation] = useState('');
  return (
    <button
      className="save-btn"
      type="button"
      onClick={() => {
        setTimeout(() => setAnimation('save-btn__animation'), 0);
        setTimeout(() => setAnimation(''), 1000);
      }}
    >
      Saved
      <p className={`save-btn__saved ${animation}`}>saved</p>
    </button>
  );
};

export default SaveBtn;
