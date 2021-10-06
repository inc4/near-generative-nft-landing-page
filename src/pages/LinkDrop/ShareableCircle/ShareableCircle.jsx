/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

const ShareableCircle = () => {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);

  return (
    <button
      type="button"
      onClick={toggle}
      className={`shareable-circle ${active ? 'shareable-circle__active' : ''}`}
    ></button>
  );
};

export default ShareableCircle;
