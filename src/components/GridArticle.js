import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './GridArticle.css';

export default class GridArticle extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="GridArticle">
        <h2>{this.props.title}</h2>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

GridArticle.defaultProps = {};

GridArticle.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
