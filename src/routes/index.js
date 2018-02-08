import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';
import Article from '../containers/Article';

export default () => (
  <BrowserRouter>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      runOnMount
    >
      <Route
        component={Home}
        path="/"
        exact
      />
      <Route
        component={Contact}
        path="/contact"
        exact
      />
      <Route
        component={Article}
        path="/article_1"
        exact
      />
      <Route
        component={NotFound}
      />
    </AnimatedSwitch>
  </BrowserRouter>
);
