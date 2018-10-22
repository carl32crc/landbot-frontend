import React, { Component } from 'react'
import GridItem from '../components/GridItem';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scroll: true
    };
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll, true);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.scroll, true);
  }
  
  scroll() {
    this.setState({scroll: !this.state.scroll})
  }

  render() {
    return (
      <div  className="grid" >
        { Array.apply(null, Array(40*40)).map(Boolean).map(Number)
          .fill(null)
          .map((g, i) =>
            <GridItem 
                visibleTop={this.state.visibleTop}
                visibleLeft={this.state.visibleLeft}
                key={i} />)
        }
      </div>
    );
  }
}

export default Grid;