/* eslint-disable no-console */
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import GenerateCountBtn from '../GenerateCountBtn';
import useBuy from '../../hooks/useBuy';
import useMintNft from '../../hooks/useMintNft';

const GenerateBlock = () => {
  const history = useHistory();

  const { mintNft } = useMintNft();

  const {
    count,
    state,
    showMessage,
    setShowMessage,
    showCountAnimation,
    formatPrice,
    handleNumberClick,
  } = useBuy();

  const { wallet, price, app } = state;

  const handleClick = () => {
    if (!wallet.signedIn) {
      const successUrl = `${window.location.origin}/#generate`;
      wallet.signIn(successUrl);
    } else if (!count) {
      setShowMessage(true);
    } else {
      history.push('/my-nfts');
      mintNft(count);
    }
  };

  return wallet ? (
    <div className="generate-block">
      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price ">
        <span className="generate-block__near">Ⓝ</span>
        <p className={`generate-block__count  ${showCountAnimation}`}>
          {count === app.manyCount
            ? formatPrice(price.manyNFTS)
            : formatPrice(price.oneNFT)}
        </p>
      </div>
      <BuyMoreBtn
        onClick={handleClick}
        text="Generate"
        className="generate-block__button"
      />
      <GenerateCountBtn
        count={app.oneCount}
        onClick={() => handleNumberClick(app.oneCount)}
        isActive={count === app.oneCount}
      />

      <GenerateCountBtn
        count={app.manyCount}
        onClick={() => handleNumberClick(app.manyCount)}
        isActive={count === app.manyCount}
      />
      {showMessage && (
        <div className="generate-block__message">
          select {app.oneCount} or {app.manyCount} nearkats
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
export default memo(GenerateBlock);
