import React, { Component } from 'react'
import SearchContext from './searchContext'
import Search from './search'
import Lists from './lists'
import Consumer from './consumer'
import { getLists } from '@/services/search'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'airhua',
      lists: []
    }
  }

  handleDispatch = async (action) => {
    switch (action.type) {
      case 'TITLE':
        return this.setState({
          title: action.payload
        })
      case 'LISTS':
        const res = await getLists(action.payload)
        console.log('res', res);
        return this.setState({
          lists: res.lists
        })
      default:
        return
    }
  }
  
  render() {
    return <div>
      <SearchContext.Provider
        value={{
          state: this.state,
          dispatch: this.handleDispatch
        }}
      >
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
        <Consumer></Consumer>
      </SearchContext.Provider>
    </div>;
  }
}
