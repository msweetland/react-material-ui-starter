import React, {Component} from 'react';
import StackGrid from 'react-stack-grid';
import GridArticle from './GridArticle';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0};
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
      this.setState({ width: '50%'});
    } else {
      this.setState({ width: '33.33%' });
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div className="inner" style={{marginBottom: '10vw', marginTop: '4vw'}}>
          <StackGrid
            gutterWidth={35}
            gutterHeight={35}
            columnWidth={this.state.width}
          >
            <div key="key1">
              <GridArticle
                url="/site-tutorial"
                date="02.08.2017"
                title="How was this site built?"
                summaryTop="Basic walkthrough on how I built this site, and some of the inspiration for the design."
              />
            </div>
          </StackGrid>
        </div>
      </div>
    );
  }
}
