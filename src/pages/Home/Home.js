import React from 'react';
import Hero from '../../components/Hero';
import Learn from '../../components/Learn';
import Rarity from '../../components/Rarity';
import Generate from '../../components/Generate';
import Roadmap from '../../components/Roadmap';
import FAQ from '../../components/FAQ';

const Home = () => (
  <>
    <Hero />
    <div className="home__container">
      <Learn />
    </div>
    <Rarity />
    <Generate />
    <Roadmap />
    <FAQ />
  </>
);

export default Home;
