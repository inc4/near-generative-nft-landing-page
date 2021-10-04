import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ className, signedIn }) => (
  <nav className={`navigation ${className || ''}`}>
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <Link
          to="/#learn"
          className="navigation__link"
          data-href="learn"
          href="#learn"
        >
          Learn
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link
          to="/#rarity"
          className="navigation__link"
          data-href="rarity"
          href="#rarity"
        >
          Rarity
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link
          to="/#faq"
          className="navigation__link"
          data-href="faq"
          href="#faq"
        >
          FAQ
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link
          to="/#roadmap"
          className="navigation__link"
          data-href="roadmap"
          href="#roadmap"
        >
          Roadmap
        </Link>
      </li>
      {signedIn && (
        <>
          <li className="navigation__list-item">
            <Link to="/my-nfts" className="navigation__link">
              My NFTs
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/link-drop" className="navigation__link">
              LinkDrop
            </Link>
          </li>
        </>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string,
  signedIn: PropTypes.bool,
};

Navigation.defaultProps = {
  className: '',
  signedIn: false,
};

export default Navigation;
