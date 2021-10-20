import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from './BuyMore';
import GenerateSoldOut from '../Generate/GenerateSoldOut';

const Buy = ({ soldOut }) => {
  const history = useHistory();
  const linkDrop = true;

  const goToLinkDrop = () => history.push('/link-drop#share-nft');

  return (
    <div className="buy">
      <div className="buy__data">
        {!soldOut ? (
          <>
            <BuyMore />
            <BuyMore isLinkDrop={linkDrop} />
            <BuyMoreBtn
              text="Send an NFT"
              className="buy__nft"
              onClick={goToLinkDrop}
            />
          </>
        ) : (
          <div className="buy__sold-out-wrapper">
            <div>
              <img
                className="buy__image"
                src="./images/generate-background.png"
                alt="sold out background"
              />
            </div>
            <GenerateSoldOut className="buy__sold-out" />
          </div>
        )}
      </div>
    </div>
  );
};

Buy.propTypes = {
  soldOut: PropTypes.bool,
};

Buy.defaultProps = {
  soldOut: false,
};

export default Buy;
