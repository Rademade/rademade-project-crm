import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getDepartments                    from 'selectors/departments'

import { Route } from 'react-router'
import DepartmentTableItem from './table-item'
import Department from 'models/department'

class List extends Component {

  componentDidMount() {
    Department.query()
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
const mapStateToProps = (state) => {
  return {
    departmentsState: getDepartments(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

