import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getProjects                       from 'selectors/projects'

import { Route } from 'react-router'
import ProjectTableItem from './table-item'

class List extends Component {
  
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Project name</th>
            <th>Active?</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.projects.map((project) =>
              <ProjectTableItem key={project.id}
                                project={project}
                                onDelete={ () => project.delete() }
                                onUpdate={ () => project.reload() }
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
    projectsState: getProjects(state)
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
