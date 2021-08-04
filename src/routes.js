import React from 'react';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
];

export default routes;
