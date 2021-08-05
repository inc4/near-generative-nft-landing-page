/* eslint-disable no-console */
import React from 'react';

const Navigation = () => {
  const handleClick = (e) => {
    console.log('click ', e.target);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a className="navigation__link" onClick={handleClick} href="#learn">
            Learn
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" onClick={handleClick} href="#rarity">
            Rarity
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" onClick={handleClick} href="#faq">
            FAQ
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" onClick={handleClick} href="#roadmap">
            Roadmap
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
