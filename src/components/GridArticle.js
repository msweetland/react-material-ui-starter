import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

Article.defaultProps = {};

Article.propTypes = {
  title: PropTypes.string.isRequired
};
