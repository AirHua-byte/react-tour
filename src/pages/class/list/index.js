import React, { Component } from 'react'
import List1 from './list1'
import List2 from './list2'

// 父传子 子传父
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 20,
      name: 'airhua'
    }
  }

  handleClick = (msg) => {
    console.log('子组件发送过来的值:', msg);
    this.setState({
      name: msg
    })
  }

  render() {
    return <div>
      <List1 age={this.state.age}></List1>
      <List2 name={this.state.name} handle={this.handleClick}></List2>
    </div>;
  }
}
