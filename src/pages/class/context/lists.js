import React, { Component } from 'react'
import { List } from 'antd-mobile'
import SearchContext from './searchContext'

export default class Lists extends Component {
  static contextType = SearchContext

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.context);
    const { title, lists } = this.context.state
    return <div>
      <h1>{title}</h1>
      <List>
        {
          lists.map((item, i) => (
            <List.Item key={i}>{ item }</List.Item>
          ))
        }
      </List>
    </div>;
  }
}
