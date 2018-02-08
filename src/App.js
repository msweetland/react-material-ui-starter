import React from 'react';
import Routes from './routes';
import Footer from './containers/Footer';
import Header from './containers/Header';
import './App.css';

export default () => (
  <div id="outer-container">
    <Header />
    <div id="page-wrap">
      <Routes />
      <Footer />
    </div>
  </div>
);
