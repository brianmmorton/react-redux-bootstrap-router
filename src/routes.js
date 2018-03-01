import React from 'react';
import Profile from 'containers/Profile';
import Home from 'containers/Home';
import Login from 'containers/Login';

import { Route, Redirect, } from 'react-router-dom';

const RouteWithSubRoutes = (routeProps) => {
  return (
    <Route
      exact
      path={routeProps.path}
      render={props => {
        if (!routeProps.state.user.isAuthenticated
          && routeProps.protected) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        }

        return <routeProps.component {...props} routes={routeProps.routes} />
      }}
    />
  )
};


export default state => [
  {
    path: '/',
    component: Home,
    protected: false,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
  {
    path: '/profile',
    component: Profile,
    protected: true,
  },
].map((route, i) => <RouteWithSubRoutes key={i} state={state} {...route} />);
