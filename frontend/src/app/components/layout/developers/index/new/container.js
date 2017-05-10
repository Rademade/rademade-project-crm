import React, { Component, PropTypes }   from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  navigationActions                from 'actions/navigation'
import DeveloperNew from './index'
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...navigationActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperNew)
