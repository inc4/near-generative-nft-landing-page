import React from 'react';
import { ReactSVG } from 'react-svg';
import NearkatsList from '../NearkatsList';
import RateList from '../RateList';
import rarityData from './rarityData';
import gradient from '../../assets/images/rarity-background-gradient.svg';

const Rarity = () => (
  <section id="rarity" className="rarity">
    <div className="rarity__header">
      <h1 className="rarity__title">
        10,000&nbsp;Nearkats... How rare is yours?
      </h1>
      <RateList rates={rarityData.rates} />
      <ReactSVG className="rarity__header-background" src={gradient} />
    </div>
    <div className="rarity__content-wrapper">
      <div className="rarity__content">
        <div className="rarity__information">
          <p className="rarity__text">
            All Nearkats are cute, however, some are more rare than others. The
            rarity of your Nearkat is determined by its attributes.
          </p>
          <p className="rarity__text">
            Each has been given a score to represent how rare it is. There is
            also a fancy color system to help you distinquish.
          </p>
        </div>
        <NearkatsList kats={rarityData.kats} />
      </div>
    </div>
  </section>
);

export default Rarity;
