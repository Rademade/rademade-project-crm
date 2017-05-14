import React, { Component, PropTypes } from 'react'
import Department from 'models/department'
import DepartmentForm from 'components/layout/departments/form'
class DepartmentEdit extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(department) {
    new Department(department).save()
  }
  
  render() {
    return (
      <DepartmentForm department={this.props.developer} submit={this.onSubmit}/>
    )
  }

}
export default DepartmentEdit
