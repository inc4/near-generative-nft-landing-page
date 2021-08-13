import React, { useEffect, useContext } from 'react';
import { appStore, onAppMount } from './state/app';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = () => {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);
  return (
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  );
};

export default Main;
