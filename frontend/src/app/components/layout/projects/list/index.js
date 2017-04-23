import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import ProjectTableItem from './table-item'
import Project from 'models/project'
class List extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
    Project.query()
  }
  componentDidUpdate(){
  }

  render() {
    const { projects, isLoadingPending } = this.props.projectsState;
    if (isLoadingPending) { return (<div>Loading</div>)}
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
            projects.map((project) =>
              <ProjectTableItem key={project.id} project={project} onDelete={ () => project.delete() }/>
            )
          }
        </tbody>
      </table>
    )
  }

}
export default List
