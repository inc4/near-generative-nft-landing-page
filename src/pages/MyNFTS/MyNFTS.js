/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import NftList from '../../components/NftList/NftList';
import NoNfts from '../../components/NoNfts/NoNfts';
import { appStore } from '../../state/app';
import Buy from '../../components/Buy';
import GenerateSoldOut from '../../components/Generate/GenerateSoldOut';

const MyNFTS = () => {
  const history = useHistory();

  const { state } = useContext(appStore);
  const { app } = state;

  useEffect(() => {
    if (!localStorage.undefined_wallet_auth_key) {
      history.push('/');
    }
  });

  return app.nftsCount ? (
    <div className="my-nfts">
      <div className="my-nfts__data">
        <NftList />
      </div>
      <Buy soldOut={app.soldOut} />
    </div>
  ) : (
    <NoNfts soldOut={app.soldOut} />
  );
};

export default MyNFTS;
