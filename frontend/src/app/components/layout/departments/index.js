import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DepartmentsList from './list/container'


class Departments extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <DepartmentsList/>
      </div>
    )
  }

}
export default Departments