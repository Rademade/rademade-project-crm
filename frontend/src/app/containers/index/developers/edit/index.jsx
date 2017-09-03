import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import developersActions                 from 'actions/developer'
import getEditDepartmentState            from 'selectors/edit-department'

import DeveloperForm from 'components/layout/developers/form'

const DeveloperEdit = ({ developer, actions }) => (
  <DeveloperForm
    developer={ developer }
    submit={ actions.saveDeveloper }/>
)

const mapStateToProps = (state) => {
  return {
    editDepartmentState: getEditDepartmentState(state)  
  } 
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...developersActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperEdit)
