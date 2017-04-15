import React, { Component, PropTypes }      from 'react'
import { connect }                          from 'react-redux'
import { bindActionCreators }               from 'redux'
import  DeveloperForm                       from './index'
import getDepartments                       from 'selectors/departments'
import { createDeveloper, updateDeveloper } from 'actions/developers'
import * as departmentActions               from 'actions/departments'
console.log('departmentActions', departmentActions)
function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({
      createDeveloper: createDeveloper,
      updateDeveloper: updateDeveloper,
      getDepartments: departmentActions.getDepartments
    }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperForm)
