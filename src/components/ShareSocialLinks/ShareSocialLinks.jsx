import React from 'react';
import PropTypes from 'prop-types';

import { ReactSVG } from 'react-svg';
import twitter from '../../assets/images/share-social/twitter.svg';
import linkedIn from '../../assets/images/share-social/linkedin.svg';
import instagram from '../../assets/images/share-social/instagram.svg';
import email from '../../assets/images/share-social/email.svg';
import facebook from '../../assets/images/share-social/facebook.svg';
import wechat from '../../assets/images/share-social/wechat.svg';
import telegram from '../../assets/images/share-social/telegram.svg';
import discord from '../../assets/images/share-social/discord.svg';

const ShareSocialLinks = ({ className, color }) => {
  const colorIcon =
    color === 'burgundy'
      ? 'share-social-links__red'
      : 'share-social-links__blue';

  return (
    <ul className={className}>
      <li>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={twitter} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={linkedIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={instagram} />
        </a>
      </li>

      <li>
        <a
          href="mailto:test@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={email} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={facebook} />
        </a>
      </li>
      <li>
        <a
          href="https://www.wechat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={wechat} />
        </a>
      </li>
      <li>
        <a
          href="https://web.telegram.org/z/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={telegram} />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={discord} />
        </a>
      </li>
    </ul>
  );
};

ShareSocialLinks.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

ShareSocialLinks.defaultProps = {
  className: '',
  color: 'burgundy',
};
export default ShareSocialLinks;
