import React, { Component, PropTypes }   from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  List                             from './index'
import getProjects                       from 'selectors/projects'

function mapStateToProps(state) {
  return {
    projectsState: getProjects(state)
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
)(List)
