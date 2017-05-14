import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import Header from 'components/header'
import Layout from 'components/layout'
import { Route } from 'react-router'

class Index extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header/>
        <Layout/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
