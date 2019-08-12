import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../Dashboard';
import NoMatch from '../Dashboard/NoMatch';

const Placeholder = () => <div>lorem</div>;

const routes = [{ path: '/', component: Placeholder }];

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
