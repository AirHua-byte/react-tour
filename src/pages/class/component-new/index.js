import React, { Component } from 'react'
import { Button } from 'antd-mobile'

// 新生命周期函数
export default class Index extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state
  }

  constructor(props) {
    super(props)
    this.state = {
      title: 'old'
    }
  }

  handleClick = () => {
    this.setState({
      title: 'new'
    })
  }

  shouldComponentUpdate(props, state) {
    if (state.title === this.state.title) {
      return false
    } else {
      return true
    }
  }
  getSnapshotBeforeUpdate() {
    return 'getSnapshotBeforeUpdate'
  }
  componentDidUpdate(props, state, snapshot) {
    console.log(snapshot);
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <Button onClick={this.handleClick} type='primary'>修改内容</Button>
    </div>;
  }
}
