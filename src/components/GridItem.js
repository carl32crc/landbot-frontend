import React from 'react';

class GridItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false
    };
    this.isInViewportTop = this.isInViewportTop.bind(this);
    this.isInViewportLeft = this.isInViewportLeft.bind(this);
  }

  componentDidMount() {
    this.setState({start: true})
  }

  isInViewportTop(offset = 0) {
    if (!this.element) return false;
    const top = this.element.getBoundingClientRect().top;
    return (top + offset) >= -100 && (top - offset) <= window.innerHeight;
  }

  isInViewportLeft(offset = 0) {
    if (!this.element) return false;
    const left = this.element.getBoundingClientRect().left;
    return (left + offset) >= -100 && (left - offset) <= window.innerWidth;
  }

  render() {
    return (  
      <div
        ref={(element) => this.element = element}
        className={this.isInViewportTop() && this.isInViewportLeft() ? 'grid-item active' : 'grid-item'}></div>
    );
  }
}

export default GridItem;