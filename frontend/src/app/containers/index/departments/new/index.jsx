import React, { Component, PropTypes } from 'react'

import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import departmentsActions               from 'actions/department'

import DepartmentForm from 'components/layout/departments/form'

const DepartmentNew = ({ actions }) => (
  <DepartmentForm
    department={ {} }
    submit={ actions.saveDepartment }/>
)

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...departmentsActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentNew)
