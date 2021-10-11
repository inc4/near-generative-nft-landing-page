import React from 'react';
import Home from './pages/Home';
import LinkDrop from './pages/LinkDrop';
import MyNFTS from './pages/MyNFTS';

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
];

export default routes;
