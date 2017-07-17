import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getSprints                        from 'selectors/sprints'

import { Route } from 'react-router'
import SprintTableItem from './table-item'

class List extends Component {
  
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Sprint name</th>
            <th>Date start</th>
            <th>Date end</th>
            <th>Sprint SP</th>
            <th>Complete SP</th>
            <th>Total SP</th>
            <th>Complete %</th>
            <th>Toggl Time</th>
            <th>Management</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.sprints.map((sprint) =>
              <SprintTableItem key={sprint.id}
                               sprint={sprint}
                               onUpdate={ () => sprint.reload() }
                               />
            )
          }
        </tbody>
      </table>
    )
  }

}
function mapStateToProps(state) {
  return {
    sprintsState: getSprints(state)
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
)(List)
