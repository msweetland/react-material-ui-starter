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
                url="/article_1"
                image="https://lonelyplanetwpnews.imgix.net/2017/11/borat-mankini-fines.jpg"
                title="Article 1"
                summaryTop="Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus."
              />
            </div>
            <div key="key2">
              <GridArticle
                image="https://lonelyplanetwpnews.imgix.net/2017/11/borat-mankini-fines.jpg"
                title="Article 2"
                summaryTop="Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus. Jay likes men and penis in his anus."
              />
            </div>
            <div key="key3">
              <GridArticle
                image="https://lonelyplanetwpnews.imgix.net/2017/11/borat-mankini-fines.jpg"
                title="Article 3"
                summaryTop="Jay likes men and penis in his anus. Jay likes men and penis in his anus."
                summaryBottom="Jay likes men and penis in his anus. Jay likes men and penis in his anus."
              />
            </div>
            <div key="key4">
              <GridArticle
                imageTop
                image="https://lonelyplanetwpnews.imgix.net/2017/11/borat-mankini-fines.jpg"
                title="Article 4"
                summaryTop="Jay likes men and penis in his anus. Jay likes men and penis in his anus. Gay."
              />
            </div>
            <div key="key5">
              <GridArticle
                image="https://lonelyplanetwpnews.imgix.net/2017/11/borat-mankini-fines.jpg"
                title="Article 5"
                summaryTop="Jay likes men and penis in his anus. "
              />
            </div>
          </StackGrid>
        </div>
      </div>
    );
  }
}
