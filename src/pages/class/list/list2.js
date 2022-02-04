import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List2 extends Component {
  // 设置默认值
  static defaultProps = {
    name: 'airhua'
  }
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = () => {
    this.props.handle('airhua-byte')
  }

  render() {
    return <div>
      <h1 onClick={this.handleClick}>{ this.props.name }</h1>
    </div>;
  }
}
