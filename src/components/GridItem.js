import React from 'react';

class GridItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleTop: false,
      visibleLeft: false
    };
    this.isInViewportTop = this.isInViewportTop.bind(this);
    this.isInViewportLeft = this.isInViewportLeft.bind(this);
  }

  componentDidMount() {
    this.setState({visibleTop: this.isInViewportTop(), visibleLeft: this.isInViewportLeft()})
  }

  componentWillReceiveProps(props, next) {
    this.setState({visibleTop: this.isInViewportTop(), visibleLeft: this.isInViewportLeft()})
  }

  isInViewportTop(offset = 0) {
    if (!this.yourElement) return false;
    const top = this.yourElement.getBoundingClientRect().top;
    return (top + offset) >= -100 && (top - offset) <= window.innerHeight;
  }

  isInViewportLeft(offset = 0) {
    if (!this.yourElement) return false;
    const left = this.yourElement.getBoundingClientRect().left;
    return (left + offset) >= -100 && (left - offset) <= window.innerWidth;
  }

  render() {
    return (  
      <div
        ref={(element) => this.yourElement = element}
        className={this.state.visibleTop && this.state.visibleLeft ? 'grid-item active' : 'grid-item'}></div>
    );
  }
}

export default GridItem;