/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import { appStore } from '../../state/app';
import GenerateCountBtn from '../GenerateCountBtn';

const GenerateBlock = () => {
  const { state } = useContext(appStore);
  const { wallet } = state;
  const history = useHistory();

  const [active, setActive] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return undefined;
  }, [showMessage]);

  const handleClick = () => {
    history.push('/#generate');
    if (!wallet.signedIn) {
      wallet.signIn();
    } else if (!active) {
      setShowMessage(true);
    }
  };

  const handleNumberClick = (number) => {
    if (active === number) {
      return;
    }

    setActive(number);
    setAnimation('generate-block__animation-hide');
    setTimeout(() => setAnimation('generate-block__animation-price'), 0);
  };

  return wallet ? (
    <div className="generate-block">
      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price ">
        <span className="generate-block__near">Ⓝ</span>
        <p className={`generate-block__count  ${animation}`}>
          {active === 10 ? 45 : 5}
        </p>
      </div>
      <BuyMoreBtn
        onClick={handleClick}
        text="Generate"
        className="generate-block__button"
      />
      <GenerateCountBtn
        count={1}
        onClick={() => handleNumberClick(1)}
        isActive={active === 1}
      />
      <GenerateCountBtn
        count={10}
        onClick={() => handleNumberClick(10)}
        isActive={active === 10}
      />
      {showMessage && (
        <div className="generate-block__message">select 1 or 10 nearkats</div>
      )}
    </div>
  ) : (
    <></>
  );
};
export default GenerateBlock;
