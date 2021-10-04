/* eslint-disable no-console */
import React, { useState } from 'react';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from './BuyMore';
import BuyContext from '../../Contexts/BuyContext';

const Buy = () => {
  const [count, setCount] = useState();
  const [kind, setKind] = useState('');

  const handleClick = (e) => {
    setCount(+e.target.innerText);
    setKind(e.target.dataset.kind);
  };

  return (
    <BuyContext.Provider value={{ count, setCount, kind, handleClick }}>
      <div className="buy">
        <div className="buy__data">
          <BuyMore />
          <BuyMore kind="gift" />
          <BuyMoreBtn text="Send an NFT" className="buy__nft" />
        </div>
      </div>
    </BuyContext.Provider>
  );
};

export default Buy;
