import React from 'react';
import Footer from '../containers/Footer';

const divStyle = {
  height: '50vh'
};

export default () => (
  <div id="wrapper">
    <div id="header">
      <div className="inner" style={divStyle}>
        <h1>
          {'Looks like this page doesn\'t exist.'}
        </h1>
      </div>
    </div>
    <Footer />
  </div>
);
