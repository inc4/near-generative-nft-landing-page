import React from 'react';
import { ReactSVG } from 'react-svg';
import rightEllipse from '../../assets/images/faq-ellipse-right.svg';
import leftEllipse from '../../assets/images/faq-ellipse-left.svg';

const FAQ = () => (
  <div id="faq" className="faq__wrapper">
    <section className="faq">
      <div className="faq__background">
        <ReactSVG className="faq__background-ellipse-left" src={leftEllipse} />
        <ReactSVG
          className="faq__background-ellipse-right"
          src={rightEllipse}
        />
      </div>
      <div className="faq__container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <ul className="faq__list">
          <li className="faq__item">
            <h3 className="faq__item-title">What’s an NFT?</h3>
            <p className="faq__item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
              nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
              Sed a mauris eget erat pellentesque gravida vitae at quam. Morbi
              commodo convallis sapien ut mollis. Nullam et lectus venenatis,
              condimentum erat nec, rutrum nisl. Aliquam nec euismod ante.
              Maecenas id neque ipsum. Cras ut felis ultrices enim faucibus
              congue sit amet id ipsum. Pellentesque id dapibus ex, a blandit
              erat. Sed tincidunt lorem sit amet ullamcorper congue.
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              Where does my NFT go after I purchase it?
            </h3>
            <p className="faq__item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
              nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
              Sed a mauris eget erat pellentesque gravida vitae at quam. Morbi
              commodo convallis sapien ut mollis. Nullam et lectus venenatis,
              condimentum erat nec, rutrum nisl. Aliquam nec euismod ante.
              Maecenas id neque ipsum. Cras ut felis ultrices enim faucibus
              congue sit amet id ipsum. Pellentesque id dapibus ex, a blandit
              erat. Sed tincidunt lorem sit amet ullamcorper congue.
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">What’s an NFT?</h3>
            <p className="faq__item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
              nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
              Sed a mauris eget erat pellentesque gravida vitae at quam. Morbi
              commodo convallis sapien ut mollis. Nullam et lectus venenatis,
              condimentum erat nec, rutrum nisl. Aliquam nec euismod ante.
              Maecenas id neque ipsum. Cras ut felis ultrices enim faucibus
              congue sit amet id ipsum. Pellentesque id dapibus ex, a blandit
              erat. Sed tincidunt lorem sit amet ullamcorper congue.
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              Where does my NFT go after I purchase it?
            </h3>
            <p className="faq__item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula vehicula diam in auctor. Suspendisse ultricies erat sem,
              nec consequat enim facilisis eu. Curabitur sit amet tempus magna.
              Sed a mauris eget erat pellentesque gravida vitae at quam. Morbi
              commodo convallis sapien ut mollis. Nullam et lectus venenatis,
              condimentum erat nec, rutrum nisl. Aliquam nec euismod ante.
              Maecenas id neque ipsum. Cras ut felis ultrices enim faucibus
              congue sit amet id ipsum. Pellentesque id dapibus ex, a blandit
              erat. Sed tincidunt lorem sit amet ullamcorper congue.
            </p>
          </li>
        </ul>
        <img
          className="faq__kat-img"
          src="./images/faq-kat.png"
          alt="nearkat"
        />
      </div>
    </section>
  </div>
);

export default FAQ;
