import React from 'react';
import NearkatsList from '../NearkatsList';
import RateList from '../RateList';
import rarityData from './rarityData';

const Rarity = () => (
  <section className="rarity">
    <div>
      <h1>10,000 Nearkats... How rare is yours?</h1>
      <p className="rarity__text">
        All Nearkats are cute, however, some are more rare than others. The
        rarity of your Nearkat is determined by its attributes.
        <br />
        Each has been given a score to represent how rare it is. There is also a
        fancy color system to help you distinquish.
      </p>
    </div>
    <div>
      <RateList rates={rarityData.rates} />
      <NearkatsList kats={rarityData.kats} />
    </div>
  </section>
);

export default Rarity;
