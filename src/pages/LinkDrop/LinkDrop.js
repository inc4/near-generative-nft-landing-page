/* eslint-disable no-console */
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import ShareSocialLinks from '../../components/ShareSocialLinks';
import Buy from '../../components/Buy';
import NoNfts from '../../components/NoNfts/NoNfts';
import bigCat from '../../assets/images/hero-big-cat.svg';
import background from '../../assets/images/link-drop-background.svg';
import ShareableLink from './ShareableLink';
import ShareableInput from './ShareableInput';
import ShareableCircle from './ShareableCircle';
import SaveBtn from './SaveBtn/SaveBtn';

const LinkDrop = () => {
  const history = useHistory();

  const { state } = useContext(appStore);
  const { app, account } = state;

  const [linkDropArray, setLinkDropArray] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (app.linkDropArray.length) {
      setLinkDropArray([...app.linkDropArray]);
    }
  }, [app.linkDropArray.length]);

  useEffect(() => {
    if (!localStorage.undefined_wallet_auth_key) {
      history.push('/');
    }
  });

  const handleChange = (e) => {
    const text = e.target.value;
    const dataIndex = +e.target.dataset.index;

    setLinkDropArray(
      linkDropArray.map((item, index) =>
        dataIndex === index ? { ...item, text } : item,
      ),
    );
  };

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const handleSaveBtn = () => {
    let testLinkDropArray = JSON.parse(
      localStorage.getItem('linkDropArray'),
    ).filter(({ accountId }) => accountId !== account.accountId);
    testLinkDropArray = [...testLinkDropArray, ...linkDropArray];

    localStorage.setItem('linkDropArray', JSON.stringify(testLinkDropArray));
  };

  return linkDropArray.length ? (
    <div className="link-drop">
      <div className="link-drop__data-wrapper" id="share-nft">
        <ReactSVG src={background} className="link-drop__background" />

        <div className="link-drop__data">
          <header className="link-drop__header">
            <span className="link-drop__header-red">Share</span> a mystery{' '}
            <span className="link-drop__header-red">NFT</span> with your friend
          </header>

          <div className="link-drop__center">
            <div>
              <ul className="link-drop__list">
                {linkDropArray.map((item, index) => (
                  <li className="link-drop__item" key={item.id}>
                    <ShareableCircle
                      activeLinkForShare={activeIndex}
                      onClick={handleCircleClick}
                      index={index}
                    />
                    <ShareableLink link={item.link} />
                    <ShareableInput
                      text={item.text}
                      index={index}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
              <div className="link-drop__save">
                <SaveBtn onClick={handleSaveBtn} />
              </div>

              <ShareSocialLinks
                color="purpure"
                className="link-drop__share-links"
                text={linkDropArray[activeIndex]?.text}
                link={linkDropArray[activeIndex]?.link}
              />
            </div>
            <ReactSVG src={bigCat} />
          </div>
        </div>
      </div>

      <Buy soldOut={app.soldOut} />
    </div>
  ) : (
    <NoNfts soldOut={app.soldOut} />
  );
};

export default LinkDrop;
