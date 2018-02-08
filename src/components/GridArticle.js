import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './GridArticle.css';

class GridArticle extends Component {
  forward = () => {
    this.props.history.push(this.props.url);
  }

  render() {
    return (
      <div className="GridArticle" onClick={this.forward} onKeyPress={() => {}}>
        <h1>{this.props.title}</h1>
        {this.props.summaryTop ?
          <p>{this.props.summaryTop}</p> :
          null
        }
        {this.props.image ?
          <img src={this.props.image} alt="" className="GridArticle-Image" /> :
          null
        }
        {this.props.summaryBottom ?
          <p>{this.props.summaryBottom}</p> : null
        }
      </div>
    );
  }
}

GridArticle.defaultProps = {
  summaryTop: '',
  summaryBottom: '',
};

GridArticle.propTypes = {
  title: PropTypes.string.isRequired,
  summaryTop: PropTypes.string,
  summaryBottom: PropTypes.string,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
};

export default withRouter(GridArticle);
