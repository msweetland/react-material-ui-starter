import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './Home.css';

export default class Home extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
