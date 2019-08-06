import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
