import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
