import React, { Component } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getDashboard                       from 'selectors/dashboard'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import ProjectDashboard from 'components/layout/bashboard/projects'
import SprintShow from './sprints/show'


class Projects extends Component {

  constructor(props) {
    super(props);
    Project.query()
  }

  render() {

    return (
      <div>
         <ProjectList projects={ this.props.projects }/>

         <Route exact
                path="/projects"
                component={ () => { return <Link to="/projects/new">Добавить</Link> } }/>
             
         <Route path='/projects/new'
                component={ ({ match }) => { return <ProjectNew/> } }/>
              
         <Route path='/projects/:id/edit'
                exact
                component={ ({ match }) => { return <ProjectEdit projectId={ match.params.id } /> } }/>

         <Route path='/projects/:id/sprints'
                exact
                component={ ({ match }) => { return <ProjectSprints projectId={ match.params.id } /> } }/>

         <Route path='/projects/:id/sprints/:sprintId/edit'
                exact
                component={ ({ match }) => { return <SprintShow sprintId={ match.params.sprintId } /> } }/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    projects: getProjects(state).projects
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
)(Projects)
