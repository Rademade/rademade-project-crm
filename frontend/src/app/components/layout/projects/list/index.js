import React, { Component, PropTypes } from  'react'
import { connect }                     from  'react-redux'
import { bindActionCreators }          from  'redux'
import getProjects                     from  'selectors/projects'
import { Route }                       from  'react-router'
import ProjectTableItem                from  './table-item'
import projectActions                  from  'actions/project'
const List = ({actions, projects}) => (
      <table className="table">
        <thead>
          <tr>
            <th>Название проекта</th>
            <th>Active?</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map((project) =>
              <ProjectTableItem key={project.id}
                                project={project}
                                onDelete={ () => actions.delete(project.id) }
                                onUpdate={ () => actions.jiraSync(project.id) }
                                />
            )
          }
        </tbody>
      </table>
)
function mapStateToProps(state) {
  return {
    projectsState: getProjects(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({...projectActions}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
