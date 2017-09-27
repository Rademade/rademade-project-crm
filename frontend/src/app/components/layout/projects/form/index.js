import React, { Component, PropTypes } from 'react'
import { connect }                          from 'react-redux'
import { bindActionCreators }               from 'redux'
import getDevelopers                        from 'selectors/developers'
import { Route } from 'react-router'
import _ from 'lodash'
import ProjectMemberList from './project-member-list'

import { Form, Field, FieldArray, reduxForm } from  'redux-form';
import renderField                from  'components/form/input'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3) {
    errors.name = 'Must be 4 characters or more'
  }
  if (!values.jiraKey) {
    errors.email = 'Required'
  }
  if (!values.togglPid) {
    errors.togglPid = 'Required'
  }
  if (!values.jiraBoardId) {
    errors.jiraBoardId = 'Required'
  }

    
  return errors
}

const ProjectForm = ({ handleSubmit, buttonName, load, pristine, reset, submitting, developers }) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field type="text"
               name="name"
               component={renderField}
               label="Project name"/>
        <Field type="text"
               name="jiraKey"
               component={renderField}
               label="Jira key"/>
        <Field type="text"
               name="togglPid"
               component={renderField}
               label="Toggl ID"/>
        <Field type="text"
               name="jiraBoardId"
               component={renderField}
               label="Board Id"/>
        <FieldArray name="members"
               developers={developers}
               component={ProjectMemberList}/>
        <button type="submit" className="btn btn-primary">{buttonName}</button>
      </Form>
    )
}

export default reduxForm({
  form: 'ProjectForm', // a unique identifier for this form
  enableReinitialize: true,
  validate
})(ProjectForm)

