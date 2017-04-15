import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DepartmentTableItem from './table-item'

class List extends Component {

  constructor(){
    super()

  }

  componentDidMount() {
    this.props.actions.getDepartments()
  }
  componentDidUpdate(){
    console.log('componentDidUpdate', this.props)
  }

  render() {
    const { departments, isLoadingPending } = this.props.departmentsState;
    if (isLoadingPending) { return (<div>Loading</div>)}
    return (
     <table className="table">
        <thead>
          <tr>
            <th>Отдел</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            departments.map((department) =>
              <DepartmentTableItem key={department.id} department={department} onDelete={ () => this.props.actions.deleteDepartment(department.id) }/>
            )
          }
        </tbody>
      </table>
    )
  }

}
export default List