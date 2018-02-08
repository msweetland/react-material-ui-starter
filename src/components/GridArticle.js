import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class GridArticle extends Component {
  constructor(props) {
    super(props);
    const styles = {
      height: this.props.height,
      backgroundColor: this.props.color,
    };

    this.state = {styles};
  }
  render() {
    return (
      <div style={this.state.styles}>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

GridArticle.defaultProps = {};

GridArticle.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
