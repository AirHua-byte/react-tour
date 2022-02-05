import React, { Component } from 'react';
import SearchContext from './searchContext';

export default class Consumer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <SearchContext.Consumer>
        {
          ({ state, dispatch }) => (
            <h1
              onClick={() => {
                dispatch({
                  type: 'TITLE',
                  payload: 'consumer'
                })
              }}
            >Consumer: {state.title}</h1>
          )
        }
      </SearchContext.Consumer>
    </div>;
  }
}
