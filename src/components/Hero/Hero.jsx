import React from 'react';
import { ReactSVG } from 'react-svg';
import CalendarBtn from './CalendarBtn';
import bigCat from '../../assets/images/hero-big-cat.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <h1 className="hero__title">
        <span className="hero__title_red">Cute</span> is the new ‘
        <span className="hero__title_red">cool</span>’
      </h1>
      <p className="hero__text">
        Now you can own some of the cutest critters in the Metaverse.
      </p>
      <p className="hero__text hero__text_red">Sale Launches August 16th</p>
      <CalendarBtn className="hero__calendar-btn" />
      <ReactSVG className="hero__img" src={bigCat} />
    </div>
  </div>
);

export default Hero;
