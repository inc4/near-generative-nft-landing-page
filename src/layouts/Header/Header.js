import React from 'react';
import { ReactSVG } from 'react-svg';
import Navigation from '../../components/Navigation';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import logo from '../../assets/images/nearkat-logo.svg';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const Header = () => (
  <header>
    <ReactSVG src={logo} />
    <Navigation />
    <div className="header__social">
      <ReactSVG src={socialFace} />
      <ReactSVG src={socialTwitter} />
    </div>
    <ConnectWalletBtn />
  </header>
);

export default Header;
