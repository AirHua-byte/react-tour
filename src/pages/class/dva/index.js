import React, { Component } from 'react';
import { connect } from 'dva'
import Search from './search';
// import Lists from './lists';
import LazyLoad from '../../../components/LazyLoad'
import ErrorBoundary from '../../../components/ErrorBoundary'

class Dva extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <ErrorBoundary>
        <Search {...this.props}></Search>
        <LazyLoad component={import('./lists')} delay={1000} {...this.props}></LazyLoad>
      </ErrorBoundary>
      {/* <Lists {...this.props}></Lists> */}
    </div>;
  }
}

export default connect(({search})=>({
  search
}))(Dva)
