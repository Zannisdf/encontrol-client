import React from 'react';

import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';
import AuthenticatedApp from '../AuthenticatedApp';

const App = ({ useAuth, useUser }) => {
  const { login, logout } = useAuth();
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login history={history} login={login} useUser={useUser} />
          )}
        />
        <Route
          path="/"
          render={() => <AuthenticatedApp logout={logout} useUser={useUser} />}
        />
      </Switch>
    </>
  );
};

export default App;
