/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import BuyMoreBtn from '../BuyMoreBtn';
import { appStore } from '../../state/app';
import GenerateCountBtn from '../GenerateCountBtn';

const GenerateBlock = () => {
  const { state } = useContext(appStore);
  const { wallet } = state;

  const [active, setActive] = useState();
  //   const [animation, setAnimation] = useState(false);

  const handleClick = () => {
    console.log('walet', wallet);
    if (!wallet.signedIn) {
      wallet.signIn();
    } else if (!active) {
      console.log('Viberite count of NearKats');
    }
  };

  return wallet ? (
    <div className="generate-block">
      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price">
        <span className="generate-block__near">Ⓝ</span>
        <p className="generate-block__count">{active === 10 ? 45 : 5}</p>
      </div>
      <BuyMoreBtn
        onClick={handleClick}
        text="Generate"
        className="generate-block__button"
      />
      <GenerateCountBtn
        count={1}
        onClick={() => setActive(1)}
        isActive={active === 1}
      />
      <GenerateCountBtn
        count={10}
        onClick={() => setActive(10)}
        isActive={active === 10}
      />
    </div>
  ) : (
    <></>
  );
};
export default GenerateBlock;
