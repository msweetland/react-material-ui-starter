import React, {Component} from 'react';
import Footer from '../containers/Footer';

export default class Article extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner">
            <h1>
              Michael Sweetland.
            </h1>
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
