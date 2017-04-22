import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  Departments                      from './index'
import getDepartments                    from 'selectors/departments'

function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments
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
)(Departments)
