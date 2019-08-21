import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../Dashboard';
import NoMatch from '../Dashboard/NoMatch';
import Cart from '../Cart';

const routes = [{ path: '/', component: Cart }];

const AuthenticatedApp = ({ logout, useUser }) => {
  const { user } = useUser();
  return (
    <div data-testid="auth-app">
      <Dashboard logout={logout} user={user}>
        <Switch>
          {routes.map(({ path, component: View }) => (
            <Route key={path} exact path={path} component={View} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Dashboard>
    </div>
  );
};

export default AuthenticatedApp;
