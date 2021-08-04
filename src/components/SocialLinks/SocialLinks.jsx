import React from 'react';
import { ReactSVG } from 'react-svg';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const SocialLinks = () => (
  <div>
    <ReactSVG src={socialFace} />
    <ReactSVG src={socialTwitter} />
  </div>
);

export default SocialLinks;
