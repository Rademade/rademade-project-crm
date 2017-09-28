import React, { Component, PropTypes } from  'react'
import { connect }                     from  'react-redux'
import { bindActionCreators }          from  'redux'
import getDepartments                  from  'selectors/departments'
import { Route }                       from  'react-router'
import DepartmentTableItem             from  './table-item'
import departmentsActions               from  'actions/departments'
class List extends Component {

  componentDidMount() {
    this.props.actions.query()
  }
   
  render() {
    const { departments, isLoadingPending } = this.props.departmentsState;
    if (isLoadingPending) { return (<div>Loading</div>)}
    const actions = this.props.actions
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
              <DepartmentTableItem key={department.id} department={department} onDelete={ () => actions.delete(department.id) }/>
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
    actions: bindActionCreators(Object.assign({...departmentsActions}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

