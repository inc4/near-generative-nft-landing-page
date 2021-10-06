import React from 'react';
import Home from './pages/Home';
import LinkDrop from './pages/LinkDrop/LinkDrop';
import MyNFTS from './pages/MyNFTS';
import NoNfts from './pages/NoNfts';
import Reveal from './pages/Reveal';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/my-nfts',
    key: 'MY_NFTS',
    component: () => <MyNFTS />,
  },
  {
    path: '/link-drop',
    key: 'LINK_DROP',
    component: () => <LinkDrop />,
  },
  {
    path: '/no-nfts',
    key: 'NO_NFTS',
    component: () => <NoNfts />,
  },
  {
    path: '/reveal',
    key: 'REVEAL',
    component: () => <Reveal />,
  },
];

export default routes;
