import React, { Component } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      flag: true
    }
  }

  componentDidCatch(error, info) {
    
  }

  render() {
    if (this.state.flag) {
      return <h1>错误边界</h1>
    }
    return this.props.children
  }
}
