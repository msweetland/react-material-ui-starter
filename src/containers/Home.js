import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div id="main">
        <Header />
      </div>
    );
  }
}
