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

const ShareSocialLinks = ({ className, color, text, link }) => {
  const colorIcon =
    color === 'burgundy'
      ? 'share-social-links__red'
      : 'share-social-links__blue';

  return (
    <ul className={className}>
      <li>
        <a
          href={`https://twitter.com/intent/tweet?url=${link}/&text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={twitter} />
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
          target="_blank"
          rel="noopener noreferrer"
          data-social="linkedin"
        >
          <ReactSVG className={colorIcon} src={linkedIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/direct/inbox/"
          target="_blank"
          rel="noopener noreferrer"
          data-social="instagram"
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
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${text}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={facebook} />
        </a>
      </li>
      <li>
        <a
          href="weixin://"
          target="_blank"
          rel="noopener noreferrer"
          data-social="wechat"
        >
          <ReactSVG className={colorIcon} src={wechat} />
        </a>
      </li>
      <li>
        <a
          href={`https://telegram.me/share/?text=${text}&url=${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG className={colorIcon} src={telegram} />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          data-social="discord"
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
  text: PropTypes.string,
  link: PropTypes.string,
};

ShareSocialLinks.defaultProps = {
  className: '',
  color: 'burgundy',
  text: '',
  link: '',
};
export default ShareSocialLinks;
