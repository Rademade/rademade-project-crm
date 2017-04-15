import React, { Component, PropTypes }   from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  List                             from './index'

import * as actions                      from 'actions/developers'
import getDevelopers                    from 'selectors/developers'


function mapStateToProps(state) {
  return {
    developersState: getDevelopers(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...actions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
