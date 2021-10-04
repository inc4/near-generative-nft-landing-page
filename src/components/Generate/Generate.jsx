import React from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';

const Generate = () => {
  const soldOut = false;
  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Why generate one?</h2>
          <p className="generate__text">
            Aside from helping the Nearkats in their mission of building out the
            open web, and participating in a super fun game utilizing bleeding
            edge tech, Nearkat NFTs will get you more than cute little kitty in
            a digital city.
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
          <p className="generate__price-text">
            For the flat fee of 5Ⓝ, you can mint your own Nearkat.{' '}
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}
          <div>
            <img
              className="generate__img"
              src="./images/generate-background.png"
              alt="generate kats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
