import React from 'react';
import { Route } from 'react-router';

export const RouteWithSubRoutes = (route) => {
  const { path, exact, routes } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component {...props} routes={routes} />}
    />
  );
};

export default RouteWithSubRoutes;
