import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DepartmentsList from './list/container'
import DepartmentForm from './form'
import { Link } from 'react-router-dom'
import _ from 'lodash'


class Departments extends Component {

  constructor(props) {
    super(props)
    this.submitNewDepartment = this.submitNewDepartment.bind(this)
    this.getDepartment = this.getDepartment.bind(this)
    console.log('Departments', this.props)
  }

  componentDidMount() {
  }

  submitNewDepartment(department) {
    if (department.id){
      this.props.actions.updateDepartment(department)
    } else {
      this.props.actions.createDepartment(department)
    }
  }

  getDepartment(id){
    if (id == 'new'){
      return {}
    } else {
      return _.find(this.props.departments, { id: id*1 } )
    }

  }

  render() {
    return (
      <div>
        <DepartmentsList/>
        <Route exact path="/departments" component={ () => { return <Link to="/departments/new">Добавить</Link> } }/>

        <Route path='/departments/:id'
               component={ ({ match }) => { return <DepartmentForm submit={ (department) => this.submitNewDepartment(department) } department={ this.getDepartment(match.params.id) } /> } }/>
      </div>
    )
  }

}
export default Departments