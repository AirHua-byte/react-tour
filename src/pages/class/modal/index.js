import React, { Component } from 'react'
import Modal from '@/components/Modal'
import { Button } from 'antd-mobile'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return <div>
      <Button type="primary" onClick={this.handleClick}>打开</Button>
      <Modal
        show={this.state.show}
        onClose={this.handleClose}
      >
        模态信息
      </Modal>
    </div>;
  }
}
