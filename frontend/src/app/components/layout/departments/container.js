import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  Departments                      from './index'
import getDepartments                    from 'selectors/departments'
import { createDepartment, updateDepartment } from 'actions/departments'



function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ createDepartment: createDepartment, updateDepartment: updateDepartment}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departments)
