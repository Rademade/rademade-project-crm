import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Route } from 'react-router'
import ProjectList from './list/container'
import ProjectForm from './form/container'
import Project from 'models/project'
import store from 'store'
import { push } from 'react-router-redux'
class Projects extends Component {

  constructor() {
    super();
    this.submitNewProject = this.submitNewProject.bind(this)
    this.getProject = this.getProject.bind(this)
  }

  componentDidMount() {
  }

  submitNewProject(project) {
    new Project(project).save()
    store.dispatch(push('/projects'))
  }

  getProject(id){
    if (id == 'new'){
      return  { members: [] }
    } else {
      return _.find(this.props.projects, { id: id*1 } )
    }

  }

  render() {

    return (
      <div>
         <ProjectList/>

         <Route exact path="/projects"
                      component={ () => { return <Link to="/projects/new">Добавить</Link> } }/>

         <Route path='/projects/:id'
                component={ ({ match }) => { return <ProjectForm submit={ (project) => this.submitNewProject(project) } project={ this.getProject(match.params.id) } /> } }/>
      </div>
    )
  }
}
export default Projects
