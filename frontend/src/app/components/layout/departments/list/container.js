import React, { Component, PropTypes }   from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  List                             from './index'
import getDepartments                    from 'selectors/departments'


function mapStateToProps(state) {
  return {
    departmentsState: getDepartments(state)
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
