import React from 'react';
import { ReactSVG } from 'react-svg';
import data from './dataReveal';

const Reveal = () => {
  const generate = (number) => {
    const arr = [];
    for (let i = 0; i < number; i += 1) {
      arr.push(
        <li className="reveal__item">
          <div className="reveal__image">
            <ReactSVG className="reveal__icon" src={data[0].icon} />
            <div className="reveal__question-sign">
              ?<span className="reveal__question-sign-big">?</span>?
            </div>
            <div className="reveal__text-hover">Reveal</div>
          </div>
          <div className="reveal__title">
            <span>{data[0].number}</span>
            <div className="reveal__question-grey">?</div>
          </div>
        </li>,
      );
    }
    return arr.map((item) => item);
  };
  return (
    <div className="reveal">
      <div className="reveal__data">
        <ul className="reveal__list">{generate(20)}</ul>
      </div>
    </div>
  );
};

export default Reveal;
