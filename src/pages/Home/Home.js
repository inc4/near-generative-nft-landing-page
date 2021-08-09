import React from 'react';
import Hero from '../../components/Hero';
import Learn from '../../components/Learn';
import Rarity from '../../components/Rarity';
import Generate from '../../components/Generate';
import Roadmap from '../../components/Roadmap';
import FAQ from '../../components/FAQ';

const Home = () => (
  <div className="home">
    <Hero />
    <Learn />
    <Rarity />
    <Generate />
    <Roadmap />
    <FAQ />
  </div>
);

export default Home;
