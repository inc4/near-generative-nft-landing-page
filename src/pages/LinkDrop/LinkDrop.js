/* eslint-disable no-console */
import React from 'react';
import { ReactSVG } from 'react-svg';
import ShareSocialLinks from '../../components/ShareSocialLinks';
import Buy from '../../components/Buy';
import bigCat from '../../assets/images/hero-big-cat.svg';
import background from '../../assets/images/link-drop-background.svg';
import ShareableLink from './ShareableLink';
import ShareableInput from './ShareableInput';
import ShareableCircle from './ShareableCircle';
import SaveBtn from './SaveBtn/SaveBtn';

const LinkDrop = () => (
  <div className="link-drop">
    <div className="link-drop__data-wrapper">
      <ReactSVG src={background} className="link-drop__background" />

      <div className="link-drop__data">
        <header className="link-drop__header">
          <span className="link-drop__header-red">Share</span> a mystery{' '}
          <span className="link-drop__header-red">NFT</span> with your friend
        </header>

        <div className="link-drop__center">
          <div>
            <ul className="link-drop__list">
              <li className="link-drop__item">
                <ShareableCircle />
                <ShareableLink link="https://genc.win/?ref_id=VEDZHXYCSsdmfld" />
                <ShareableInput />
              </li>
              <li className="link-drop__item">
                <ShareableCircle />
                <ShareableLink link="https://genc.win/?ref_id=ABYTMDDPE" />
                <ShareableInput />
              </li>
              <li className="link-drop__item">
                <ShareableCircle />
                <ShareableLink link="https://genc.win/?ref_id=YYCHYBETU" />
                <ShareableInput />
              </li>
            </ul>
            <div className="link-drop__save">
              <SaveBtn />
            </div>

            <ShareSocialLinks
              color="purpure"
              className="link-drop__share-links"
            />
          </div>
          <ReactSVG src={bigCat} />
        </div>
      </div>
    </div>

    <Buy />
  </div>
);

export default LinkDrop;
