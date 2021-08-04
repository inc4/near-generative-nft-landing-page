import React from 'react';
import { ReactSVG } from 'react-svg';
import Navigation from '../../components/Navigation';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import SocialLinks from '../../components/SocialLinks';
import logo from '../../assets/images/nearkat-logo.svg';

const Header = () => (
  <header>
    <ReactSVG src={logo} />
    <Navigation />
    <SocialLinks />
    <ConnectWalletBtn />
  </header>
);

export default Header;
