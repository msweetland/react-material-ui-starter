import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Footer from '../containers/Footer';

import './Article.css';

// "\f060"

export default class Article extends Component {
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
          <div className="inner">
            <div className="Article-Title">
              <h1>
                How was this site built?
              </h1>
              <h2>
                02.08.2016
              </h2>
              <h6>
                <a href="/" className="icon fa-arrow-left return-home-article">
                  {'   Return Home'}
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div id="main">
          <div className="inner">
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
              sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
              Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
              Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex,
              lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus,
              commodo eget turpis at, elementum convallis elit. Pellentesque enim
              turpis, hendrerit tristique.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Article.defaultProps = {
  summaryTop: null,
  summaryBottom: null,
  image: null,
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summaryTop: PropTypes.string,
  summaryBottom: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
};
