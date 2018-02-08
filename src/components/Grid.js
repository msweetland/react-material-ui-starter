import React, {Component} from 'react';
import StackGrid from 'react-stack-grid';
import Article from './GridArticle';

const divStyle = {
  height: '50vh',
  marginTop: '-50px'
};

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }


  updateWindowDimensions() {
    const width = window.innerWidth / 2;
    if (width <= 320) {
      this.setState({ width: '100%' });
    } else if (width <= 500) {
      this.setState({ width: '50%' });
    } else {
      this.setState({ width: '33.33%' });
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner" style={divStyle}>
            <StackGrid
              gutterWidth={20}
              columnWidth={this.state.width}
            >
              <div key="key1">
                <Article title="Article 1" />
              </div>
              <div key="key2">
                <Article title="Article 2" />
              </div>
              <div key="key3">
                <Article title="Article 3" />
              </div>
            </StackGrid>
          </div>
        </div>
      </div>
    );
  }
}
