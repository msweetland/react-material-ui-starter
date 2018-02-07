import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        render={(props) => (<Home {...props} />)}
        path="/"
        exact
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
