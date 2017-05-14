import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import developersActions               from 'actions/developer'

import DeveloperForm from 'components/layout/developers/form'

const DeveloperNew = ({ actions }) => (
  <DeveloperForm
    developer={ {} }
    submit={ actions.saveDeveloper }/>
)

const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...developersActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperNew)
