import React from 'react';
import Follow from '../components/Footer-Follow';
import GetInTouch from '../components/GetInTouch';

export default () => (
  <div id="wrapper" >
    <footer id="footer">
      <div className="inner">
        <GetInTouch />
        <Follow />
      </div>
    </footer>
  </div>
);
