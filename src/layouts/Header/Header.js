import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/images/nearkat-logo.svg';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';

const Header = () => (
  <header className="header">
    <ReactSVG className="header__logo" src={logo} />
    <Navigation className="header__navigation" />
    <SocialLinks className="header__social" />
    <ConnectWalletBtn />
  </header>
);

export default Header;
