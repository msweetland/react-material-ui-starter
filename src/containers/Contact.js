import React from 'react';
import GetInTouch from '../components/GetInTouch';

const divStyle = {
  height: '50vh'
};

export default () => (
  <div id="wrapper">
    <div id="header">
      <div className="inner" style={divStyle}>
        <GetInTouch />
      </div>
    </div>
  </div>
);
