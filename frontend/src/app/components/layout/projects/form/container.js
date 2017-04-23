import React, { Component, PropTypes }      from 'react'
import { connect }                          from 'react-redux'
import { bindActionCreators }               from 'redux'
import  ProjectForm                         from './index'
import getDevelopers                        from 'selectors/developers'
function mapStateToProps(state) {
  return {
    developers: getDevelopers(state).developers
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
)(ProjectForm)
