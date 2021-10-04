/* eslint-disable no-console */
import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import logo from '../../assets/images/footer-near-logo.svg';

const Footer = () => {
  const { state } = useContext(appStore);
  const { wallet } = state || {};

  return wallet ? (
    <footer className="footer">
      <div className="footer__container">
        <Navigation className="footer__navigation" signedIn={wallet.signedIn} />
        <SocialLinks className="footer__social" />
        {console.log('wallet = ', wallet)}

        <p className="footer__built">Built on</p>
        <ReactSVG className="footer__logo" src={logo} />

        <p className="footer__text">
          Nearkat NFTs are built on top of NEAR Protocol, where minting NFTs
          cost less than a cent per item.
        </p>
        <p className="footer__copyright ">
          © 2021 Nearkat Guild. All Rights Reserved.
        </p>
      </div>
    </footer>
  ) : (
    <></>
  );
};

export default Footer;
