/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../../BuyMoreBtn';
import Price from '../../Price';
import GenerateCountBtn from '../../GenerateCountBtn';
import { appStore } from '../../../state/app';
import { nearkatGenerate, linkDropGenerate } from '../../../data';
import { GAS } from '../../../state/near';

const BuyMore = ({ kind }) => {
  const { state, update } = useContext(appStore);
  const { app, price, contract } = state;
  const history = useHistory();

  const isGift = kind === 'gift';
  const text = isGift ? 'Generate gift links' : 'Buy more';

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

  const handleClick = async () => {
    if (!active) {
      setShowMessage(true);
    } else if (isGift) {
      const linksLastGenerate = +active;
      const linksNftsCount = linksLastGenerate + +app.linksNftsCount;
      localStorage.setItem('linksNftsCount', linksNftsCount);

      const linkdropURL = await linkDropGenerate(contract);
      console.log(linkdropURL);

      const { linksNearkats } = app;
      linksNearkats.push(linkdropURL);
      localStorage.setItem('linksNearkats', JSON.stringify(linksNearkats));

      update('app', { linksLastGenerate, linksNftsCount, linksNearkats });

      // if (active === 10) {
      //   contract.create_linkdrop({ num: 10 }, GAS, price.tenTokenCost);
      // }
      // if (active === 1) {
      // await contract.create_linkdrop({}, GAS, price.oneTokenCost);
      // }

      history.push('/link-drop');
    } else {
      const lastGenerate = +active;
      const nftsCount = lastGenerate + +app.nftsCount;
      localStorage.setItem('nftsCount', nftsCount);

      const newNearkatsArr = nearkatGenerate(lastGenerate);
      const { nearkats } = app;
      nearkats.push(...newNearkatsArr);
      localStorage.setItem('nearkats', JSON.stringify(nearkats));

      update('app', { lastGenerate, nftsCount, nearkats });

      if (active === 10) {
        contract.nft_mint_many({ num: 10 }, GAS, price.tenTokenCost);
      }
      if (active === 1) {
        contract.nft_mint_one({}, GAS, price.oneTokenCost);
      }
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

  return (
    <div className="buy-more">
      <div className="buy-more__top">
        <BuyMoreBtn text={text} onClick={handleClick} />

        {showMessage && (
          <div className="buy-more__message">select 1 or 10 nearkats</div>
        )}
        {isGift && (
          <p className="buy-more__top-text">
            Share a mystery NFT for your friend
          </p>
        )}
      </div>

      <div className="buy-more__center">
        <div className="buy-more__wrapper">
          <GenerateCountBtn
            count={1}
            onClick={() => handleNumberClick(1)}
            isActive={active === 1}
          />
        </div>
        <Price
          price={price.oneToken}
          className={` ${active === 1 ? animation : ''}`}
        />
      </div>

      <div className="buy-more__bottom">
        <div className="buy-more__wrapper">
          <GenerateCountBtn
            count={10}
            onClick={() => handleNumberClick(10)}
            isActive={active === 10}
          />
        </div>
        <Price
          price={price.tenToken}
          className={` ${active === 10 ? animation : ''}`}
        />
      </div>
    </div>
  );
};

BuyMore.propTypes = {
  kind: PropTypes.string,
};

BuyMore.defaultProps = {
  kind: 'buy',
};

export default BuyMore;
