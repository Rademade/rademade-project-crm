import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getDepartments                    from 'selectors/departments'

import { Route } from 'react-router'
import DepartmentsList from 'components/layout/departments/list'
import DepartmentNew from './new'
import DepartmentEdit from './edit'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class Departments extends Component {

  constructor(props) {
    super(props)
    this.getDepartment = this.getDepartment.bind(this)
  }

  getDepartment(id){
    return _.find(this.props.departments, { id: id * 1 } )
  }

  render() {
    return (
      <div>
        <DepartmentsList/>

        <Route exact path="/departments" component={ () => { return <Link to="/departments/new">Добавить</Link> } }/>

        <Route path='/departments/new'
               component={ ({ match }) => { return <DepartmentNew/> } }/>
             
        <Route path='/departments/:id/edit'
               component={ ({ match }) => { return <DepartmentEdit department={ this.getDepartment(match.params.id) } /> } }/>
 
      </div>
    )
  }

}
function mapStateToProps(state) {
  return {
     departments: getDepartments(state).departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departments)
