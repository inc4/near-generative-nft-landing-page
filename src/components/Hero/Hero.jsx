import React from 'react';
import { ReactSVG } from 'react-svg';
import CalendarBtn from './CalendarBtn';
import bigCat from '../../assets/images/hero-big-cat.svg';
import bgEllipse from '../../assets/images/hero-ellipse.svg';
import bgCloud1 from '../../assets/images/hero-cloud1.svg';
import bgCloud2 from '../../assets/images/hero-cloud2.svg';
import bgCloud3 from '../../assets/images/hero-cloud3.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background">
        <ReactSVG className="hero__background-ellipse" src={bgEllipse} />
        <ReactSVG className="hero__background-cloud1" src={bgCloud1} />
        <ReactSVG className="hero__background-cloud2" src={bgCloud2} />
        <ReactSVG className="hero__background-cloud3" src={bgCloud3} />
      </div>
      <div className="hero__information">
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
  </div>
);

export default Hero;
