import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        render={(props) => (<Home {...props} />)}
        path="/"
        exact
      />
      <Route
        render={(props) => (<Contact {...props} />)}
        path="/contact"
        exact
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
