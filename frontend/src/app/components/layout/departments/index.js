import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DepartmentsList from './list/container'
import DepartmentForm from './form'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { push } from 'react-router-redux'
import store from 'store'

import Department from 'models/department'

class Departments extends Component {

  constructor(props) {
    super(props)
    this.getDepartment = this.getDepartment.bind(this)
  }

  componentDidMount() {
  }

  submit(department){
    new Department(department).save()
    store.dispatch(push('/departments'))
  }

  getDepartment(id){
    if (id == 'new'){
      return {}
    } else {
      return _.find(this.props.departments, { id: id*1 } )
    }

  }

  render() {
    console.log('rerender')
    return (
      <div>
        <DepartmentsList/>
        <Route exact path="/departments" component={ () => { return <Link to="/departments/new">Добавить</Link> } }/>

        <Route path='/departments/:id'
               component={ ({ match }) => { return <DepartmentForm submit={ this.submit.bind(this) } department={ this.getDepartment(match.params.id) } /> } }/>
      </div>
    )
  }

}
export default Departments
