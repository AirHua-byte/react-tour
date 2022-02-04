import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List1 extends Component {
  // 设置默认值
  static defaultProps = {
    age: 18
  }
  static propTypes = {
    age: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <h1>{ this.props.age }</h1>
    </div>;
  }
}
