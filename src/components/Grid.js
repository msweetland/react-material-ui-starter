import React, {Component} from 'react';
import StackGrid from 'react-stack-grid';
import GridArticle from './GridArticle';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    let divStyle = {
      marginTop: '-100px',
      marginBottom: '100px'
    };

    this.state = { width: 0, divStyle};
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
      let divStyle = {
        marginBottom: '100px'
      };
      this.setState({ width: '100%', divStyle });
    } else if (width <= 500) {
      let divStyle = {
        marginBottom: '100px'
      };
      this.setState({ width: '50%', divStyle });
    } else {
      let divStyle = {
        marginTop: '-100px',
        marginBottom: '100px'
      };
      this.setState({ width: '33.33%', divStyle });
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="inner" style={this.state.divStyle}>
            <StackGrid
              gutterWidth={35}
              gutterHeight={35}
              columnWidth={this.state.width}
            >
              <div key="key1">
                <GridArticle title="Article 1" height="300px" color="red" />
              </div>
              <div key="key2">
                <GridArticle title="Article 2" height="200px" color="gray" />
              </div>
              <div key="key3">
                <GridArticle title="Article 3" height="500px" color="blue" />
              </div>
              <div key="key4">
                <GridArticle title="Article 4" height="250px" color="blue" />
              </div>
              <div key="key5">
                <GridArticle title="Article 5" height="100px" color="green" />
              </div>
            </StackGrid>
          </div>
        </div>
      </div>
    );
  }
}
