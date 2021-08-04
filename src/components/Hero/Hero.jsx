import React from 'react';
import { ReactSVG } from 'react-svg';
import CalendarBtn from './CalendarBtn';
import bigCat from '../../assets/images/hero-big-cat.svg';

const Hero = () => (
  <div className="hero">
    <div>
      <h1>Cute is the new ‘cool’</h1>
      <p>Now you can own some of the cutest critters in the Metaverse.</p>
      <p>Sale Launches August 16th</p>
      <CalendarBtn />
    </div>
    <ReactSVG src={bigCat} />
    <div className="hero__background">Backgournd with clouds</div>
  </div>
);

export default Hero;
