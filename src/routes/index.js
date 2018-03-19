import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        component={Home}
        path="/"
        exact
      />
      <Route
        component={NotFound}
      />
    </Switch>
  </BrowserRouter>
);
