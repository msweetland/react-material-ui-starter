import React from 'react';
import Routes from './routes';
import Header from './containers/Header';
import './App.css';

export default () => (
  <div id="outer-container">
    <Header />
    <div id="page-wrap">
      <Routes />
    </div>
  </div>
);
