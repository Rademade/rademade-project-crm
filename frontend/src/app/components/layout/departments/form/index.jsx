import React, { Component, PropTypes }    from 'react'
import { Route }                          from 'react-router'
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { bindActionCreators }          from 'redux'
const DepartmentForm = (props) => (
    <Form
        model="forms.department"
        onSubmit={(department) => props.submit(department)}>
        <label htmlFor="forms.department.name">Department name:</label>

        <Control.text
          model="forms.department.name"
          validators={{ required: (name) => name }}
          id="forms.department.name"/>

        <Errors
          model="forms.department.name"
          messages={{
            required: 'Название обязательно'
          }}
          show={{touched: true, focus: false}}
        />

        <button type="submit" className="btn btn-primary">{props.buttonName}</button>
    </Form>
)
const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.department) {
    dispatch(actions.load('forms.department', ownProps.department))
  } else {
    dispatch(actions.load('forms.department', { name: '' }))
  }
  return {
    actions: bindActionCreators(Object.assign({ ...actions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentForm)
