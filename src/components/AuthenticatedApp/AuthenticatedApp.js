import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Customers from '../Customers/Customers';
import Dashboard from '../Dashboard';
import NoMatch from '../Dashboard/NoMatch';

const routes = [{ path: '/', component: Customers }];

const AuthenticatedApp = () => (
  <Dashboard>
    <Switch>
      {routes.map(({ path, component: View }) => (
        <Route key={path} exact path={path} component={View} />
      ))}
      <Route component={NoMatch} />
    </Switch>
  </Dashboard>
);

export default AuthenticatedApp;
