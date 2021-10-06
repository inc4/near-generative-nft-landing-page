import React from 'react';
import { ReactSVG } from 'react-svg';
import soldOutKat from '../../assets/images/sold-out-kat.svg';
import Buy from '../../components/Buy/Buy';
import GenerateSoldOut from '../../components/Generate/GenerateSoldOut';
import ShareSocialLinks from '../../components/ShareSocialLinks';

const NoNfts = () => {
  const soldOut = true;
  return (
    <div className="no-nfts">
      <div className="no-nfts__data">
        <div className="no-nfts__data-top">
          <div className="no-nfts__information">
            <p className="no-nfts__title">
              You don&#39;t have any{' '}
              <span className="no-nfts__text-red">NFTs</span> yet
            </p>
            <p className="no-nfts__text">
              Buy your first <span className="no-nfts__text-red">NFT</span>
            </p>
            <ShareSocialLinks className="no-nfts__links" color="burgundy" />
          </div>
          <ReactSVG className="no-nfts__img" src={soldOutKat} />
        </div>
        {soldOut ? <GenerateSoldOut className="no-nfts__sold-out" /> : <Buy />}
      </div>
    </div>
  );
};

export default NoNfts;
