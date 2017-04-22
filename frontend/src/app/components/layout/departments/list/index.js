import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DepartmentTableItem from './table-item'
import Department from 'models/department'

class List extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    Department.query()
  }
  componentDidUpdate(){
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
              <DepartmentTableItem key={department.id} department={department} onDelete={ () => department.delete() }/>
            )
          }
        </tbody>
      </table>
    )
  }

}
export default List