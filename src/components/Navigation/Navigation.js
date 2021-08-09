import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ className }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const id = e.target.dataset.href;
    const elem = document.getElementById(id);

    elem.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`navigation ${className || ''}`}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            onClick={handleClick}
            data-href="learn"
            href="#learn"
          >
            Learn
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            onClick={handleClick}
            data-href="rarity"
            href="#rarity"
          >
            Rarity
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            onClick={handleClick}
            data-href="faq"
            href="#faq"
          >
            FAQ
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link"
            onClick={handleClick}
            data-href="roadmap"
            href="#roadmap"
          >
            Roadmap
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

Navigation.defaultProps = {
  className: '',
};

export default Navigation;
