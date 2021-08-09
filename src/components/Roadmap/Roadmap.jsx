import React from 'react';
import { ReactSVG } from 'react-svg';
import bigCat from '../../assets/images/hero-big-cat.svg';
import clouds from '../../assets/images/roadmap-background-clouds.svg';
// import ellipseRight from '../../assets/images/roadmap-background-ellips-right.svg';
// import ellipseLeft from '../../assets/images/roadmap-background-ellips-left.svg';

const Roadmap = () => (
  <div className="roadmap">
    <div className="roadmap__background">
      <div className="roadmap__background-ellipse-right" />
      <div className="roadmap__background-ellipse-left" />
      <ReactSVG className="roadmap__background-clouds" src={clouds} />
    </div>
    <div className="roadmap__container">
      <h2 className="roadmap__title">Nearkat NFT Roadmap</h2>

      <ul className="roadmap__list">
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Title of the Milestone</h3>
          <p className="roadmap__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
            nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
          </p>
        </li>
      </ul>
      <ReactSVG className="roadmap__icon" src={bigCat} />
    </div>
  </div>
);

export default Roadmap;
