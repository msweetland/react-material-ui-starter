import React, { Component } from 'react';
import Footer from '../containers/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner">
            <div>
              <h1>
                Michael Sweetland.
              </h1>
              <p>
                I am a full stack developer currently studying data science at the
                University of Michigan. I specialize in building applications that use
                some of the most cutting edge frameworks such as React, GraphQL, and Django.
                <br />
                <br />
                This is a portfolio I designed with some of my projects.
                <br />
                Feel free to scroll to the bottom to get in touch.
              </p>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
