import React, { Component, PropTypes } from  'react'
import { connect }                     from  'react-redux'
import { bindActionCreators }          from  'redux'
import getDepartments                  from  'selectors/departments'
import { Route }                       from  'react-router'
import _                               from  'lodash'
/*
  redux-form dependencies
*/
import { Form, Field, reduxForm } from  'redux-form';
import renderField                from  'components/form/input'
import FormSelect                from  'components/form/select'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3) {
    errors.name = 'Must be 4 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.departmentId) {
    errors.departmentId = 'Required'
  }
  return errors
}

const DeveloperForm = ({ handleSubmit, buttonName, load, pristine, reset, submitting, departments }) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field type="text"
               name="name"
               component={renderField}
               label="Teammate name"/>
        <Field type="text"
               name="togglApiKey"
               component={renderField}
               label="Toggl ID"/>
        <Field type="email"
               name="email"
               component={renderField}
               label="Email"/>
        <Field name="departmentId"
               label="Отеделение"
               getValue={ (item) => item.id }
               component={FormSelect}
               items={departments}
               inspect={ (item) => item.name }>
        </Field>
        <button type="submit" className="btn btn-primary">{buttonName}</button>
      </Form>
    )
}

export default reduxForm({
  form: 'DeveloperForm', // a unique identifier for this form
  enableReinitialize: true,
  validate
})(DeveloperForm)
