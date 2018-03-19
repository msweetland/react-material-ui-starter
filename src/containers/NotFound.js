import React, {Component} from 'react';

export default class NotFound extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        Not Found
      </div>
    );
  }
}
