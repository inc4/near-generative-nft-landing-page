/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from './BuyMore';
import BuyContext from '../../Contexts/BuyContext';

const Buy = () => {
  const [count, setCount] = useState();
  const [kind, setKind] = useState('');
  const history = useHistory();

  const handleClick = (e) => {
    setCount(+e.target.innerText);
    setKind(e.target.dataset.kind);
  };

  const goToLinkDrop = () => history.push('/link-drop');

  return (
    <BuyContext.Provider value={{ count, setCount, kind, handleClick }}>
      <div className="buy">
        <div className="buy__data">
          <BuyMore />
          <BuyMore kind="gift" />
          <BuyMoreBtn
            text="Send an NFT"
            className="buy__nft"
            onClick={goToLinkDrop}
          />
        </div>
      </div>
    </BuyContext.Provider>
  );
};

export default Buy;
