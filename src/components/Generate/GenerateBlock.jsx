/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import { appStore } from '../../state/app';
import GenerateCountBtn from '../GenerateCountBtn';
import { nearkatGenerate } from '../../data';

const GenerateBlock = () => {
  const { state, update } = useContext(appStore);
  const { wallet, app, price } = state;
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
    if (!wallet.signedIn) {
      wallet.signIn();
    } else if (!active) {
      setShowMessage(true);
    } else {
      const lastGenerate = +active;
      const nftsCount = lastGenerate + +app.nftsCount;
      localStorage.setItem('nftsCount', nftsCount);

      const newNearkatsArr = nearkatGenerate(lastGenerate);
      const { nearkats } = app;
      nearkats.push(...newNearkatsArr);
      localStorage.setItem('nearkats', JSON.stringify(nearkats));

      update('app', { lastGenerate, nftsCount, nearkats });
      history.push('/my-nfts');
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
          {active === 10 ? price.tenToken : price.oneToken}
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
export default memo(GenerateBlock);
