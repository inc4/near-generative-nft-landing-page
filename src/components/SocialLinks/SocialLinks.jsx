import React from 'react';
import { ReactSVG } from 'react-svg';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const SocialLinks = () => (
  <div className="social-links">
    <ReactSVG className="social-links__item" src={socialFace} />
    <ReactSVG className="social-links__item" src={socialTwitter} />
  </div>
);

export default SocialLinks;