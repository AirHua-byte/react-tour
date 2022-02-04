import React, { Component } from 'react'
import { Button } from 'antd-mobile'

// 旧生命周期函数
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'old-component'
    }
  }

  // 组件加载完成
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 应该更新组件
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }
  // 组件将要更新
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  // 组件被更新完成
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // 组价即将卸载
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState((state, props) => ({
      title: state.title + '---'
    }))
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <Button onClick={this.handleClick} type='primary'>修改内容</Button>
    </div>;
  }
}
