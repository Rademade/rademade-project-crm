import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import getDepartments                  from 'selectors/departments'
import departmentsActions         from 'actions/departments';
import { Route }                       from 'react-router'
import DepartmentsList                 from 'components/layout/departments/list'
import DepartmentNew                   from './new'
import DepartmentEdit                  from './edit'
import { Link }                        from 'react-router-dom'
import _                               from 'lodash'

const Departments = (props) => (
      <div>
        <DepartmentsList/>

        <Route exact path="/departments" component={ () => { return <Link to="/departments/new">Добавить</Link> } }/>

        <Route path='/departments/new'
               component={ ({ match }) => { return <DepartmentNew/> } }/>

        <Route path='/departments/:id/edit'
          component={ ({ match }) => { return <DepartmentEdit id={ match.params.id } /> } }/>

      </div>
)

function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...departmentsActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departments)
