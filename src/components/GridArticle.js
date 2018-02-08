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
        <h1>{this.props.title}</h1>
        <p>{this.props.summaryTop}</p>
        <img src={this.props.image} alt="" className="GridArticle-Image" />
        <p>{this.props.summaryBottom}</p>
      </div>
    );
  }
}

GridArticle.defaultProps = {
  summaryTop: '',
  summaryBottom: ''
};

GridArticle.propTypes = {
  title: PropTypes.string.isRequired,
  summaryTop: PropTypes.string,
  summaryBottom: PropTypes.string,
  image: PropTypes.string.isRequired,
};
