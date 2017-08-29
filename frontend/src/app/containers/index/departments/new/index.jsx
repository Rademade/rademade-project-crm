import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import departmentActions               from 'actions/departments';
import DepartmentForm                  from 'components/layout/departments/form'

const DepartmentNew = ({ actions }) => (
  <DepartmentForm
    buttonName="Редактировать"
    submit={ actions.create }/>
)

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ create: departmentActions.create }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentNew)
