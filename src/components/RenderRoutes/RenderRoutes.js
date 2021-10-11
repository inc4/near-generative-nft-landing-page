import React from 'react';
import { Switch, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import ScrollToTop from '../ScrollToTop';

const RenderRoutes = ({ routes }) => (
  <>
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
    <ScrollToTop />
  </>
);

RenderRoutes.propTypes = {
  routes: PropTypes.array,
};

export default RenderRoutes;
