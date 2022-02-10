import React, { Component } from 'react'
import { WingBlank, WhiteSpace, List } from 'antd-mobile'
import { Link } from 'umi'


export default class Index extends Component {
  render() {
    return (
      <div>
        <WingBlank>
          <List>
            <List.Item>
              <Link to="/function/hook">hook</Link>
            </List.Item>
            <WhiteSpace></WhiteSpace>
            <List.Item>
              <Link to="/function/context">context</Link>
            </List.Item>
            <WhiteSpace></WhiteSpace>
            <List.Item>
              <Link to="/function/customize">customize</Link>
            </List.Item>
            <WhiteSpace></WhiteSpace>
          </List>
        </WingBlank>
      </div>
    )
  }
}
