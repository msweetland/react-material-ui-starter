import React, {Component} from 'react';
import Footer from '../containers/Footer';

export default class NotFound extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner" style={{height: '50vh'}}>
            <h1>
              {'Looks like this page doesn\'t exist.'}
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
