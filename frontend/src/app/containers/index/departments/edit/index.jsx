import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import  departmentsActions              from 'actions/departments'
import DepartmentForm                  from 'components/layout/departments/form'

class DepartmentEdit extends Component {

  componentWillMount(){
    let department = this.props.department.department
    if (!department || this.props.id != department.id){
      this.props.get()
    }
  }

  render(){
    return (
      <DepartmentForm
        department={this.props.department.department}
        buttonName="Сохранить"
        submit={ this.props.update }/>
    )}
}

const mapStateToProps = (state, ownProps) => {
  return { id: ownProps.id, department: state.department }
}

const mapDispatchToProps = (dispatch, ownProps, state) => {
  return {
    get: () => dispatch(departmentsActions.get(ownProps.id)),
    update: (department) => dispatch(departmentsActions.update(department))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentEdit)
