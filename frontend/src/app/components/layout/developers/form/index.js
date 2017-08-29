import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import getDepartments                  from 'selectors/departments'
import { Route }                       from 'react-router'
import _                               from 'lodash'
import Department                      from 'models/department'
/*
  redux-form dependencies
*/
import { Field, reduxForm } from 'redux-form';

const DeveloperForm = ({ handleSubmit, pristine, reset, submitting, departments }) => {

    return (
      <form onSubmit={handleSubmit}>
            
          <div className="form-group">
            <label htmlFor="disabledTextInput">Teammate name</label>
            <Field type="text"
              name="name"
              component="input"
                   className="form-control"
                   placeholder="Teammate name"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="disabledTextInput">Toggl ID</label>
            <Field type="text"
                   name="togglApiKey"
                   component="input"
                   className="form-control"
                   placeholder="Toggl ID"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Department</label>
            <Field className="form-control"
                   name="departmentId"
                   component="select"
                   id="exampleSelect1">
              { departments.map((department)=> {
                return <option value={department.id}>{department.name}</option>
              } )}
            </Field>
          </div>
            <button type="submit" className="btn btn-primary">Add new project</button>
      </form>
    )

}
function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default reduxForm({
  form: 'DeveloperForm' // a unique identifier for this form
})(DeveloperForm)
