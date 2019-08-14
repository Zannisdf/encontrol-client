import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';
import AuthenticatedApp from '../AuthenticatedApp';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={AuthenticatedApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
