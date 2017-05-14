import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  navigationActions                from 'actions/navigation'

import Department from 'models/department'
import DepartmentForm from 'components/layout/departments/form'
class DepartmentNew extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(department) {
   new Department(department).save()
    this.props.actions.toDepartments()
  }
  
  render() {
    return (
      <DepartmentForm department={ {} } submit={this.onSubmit}/>
    )
  }

}
DepartmentNew.propTypes = {
}
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...navigationActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentNew)
