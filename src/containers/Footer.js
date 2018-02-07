import React, { Component } from 'react';
import Follow from '../components/Footer-Follow';
import GetInTouch from '../components/GetInTouch';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div id="wrapper">
        <footer id="footer">
          <div className="inner">
            <GetInTouch />
            <Follow />
          </div>
        </footer>
      </div>
    );
  }
}
