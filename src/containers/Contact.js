import React, { Component } from 'react';
import GetInTouch from '../components/GetInTouch';

const divStyle = {
  height: '50vh'
};

export default class Contact extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner" style={divStyle}>
            <GetInTouch contactPage />
          </div>
        </div>
      </div>
    );
  }
}
