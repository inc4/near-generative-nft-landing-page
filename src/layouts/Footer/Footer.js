import React from 'react';
import { ReactSVG } from 'react-svg';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import logo from '../../assets/images/footer-near-logo.svg';

const Footer = () => (
  <div>
    <Navigation />
    <SocialLinks />
    <div>
      <p>Built on</p>
      <ReactSVG src={logo} />
    </div>
    <p>
      Nearkat NFTs are built on top of NEAR Protocol, where minting NFTs cost
      less than a cent per item.
    </p>
    <p>© 2021 Nearkat Guild. All Rights Reserved.</p>
  </div>
);

export default Footer;
