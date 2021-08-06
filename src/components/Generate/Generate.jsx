import React from 'react';
import { ReactSVG } from 'react-svg';
import generate from '../../assets/images/generate.svg';

const Generate = () => (
  <div className="generate">
    <div className="generate__container">
      <div className="generate__information">
        <h2 className="generate__title">Why generate one?</h2>
        <p className="generate__text">
          Aside from helping the Nearkats in their mission of building out the
          open web, and participating in a super fun game utilizing bleeding
          edge tech, Nearkat NFTs will get you more than cute little kitty in a
          digital city.
        </p>
        <p className="generate__list-title">Your Nearkat gets you:</p>
        <ul className="generate__list">
          <li className="generate__list-item">
            Special Access to Nearkat owners group
          </li>
          <li className="generate__list-item">Discounts on stuff</li>
          <li className="generate__list-item">Another perk</li>
          <li className="generate__list-item">Another perk</li>
          <li className="generate__list-item">
            and who knows what else in the future...
          </li>
        </ul>
      </div>

      <ReactSVG className="generate__icon" src={generate} />
    </div>
  </div>
);

export default Generate;
