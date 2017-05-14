import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'

import ProjectForm from 'components/layout/projects/form'
import Project from 'models/project'
import projectActions from 'actions/project'

class ProjectEdit extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(project) {
    new Project(project).save()
    this.props.actions.toProjects()
  }
  
  render() {
    return (
      <ProjectForm project={this.props.project} submit={ (project) => this.props.actions.saveProject(project) }/>
    )
  }

}
function mapStateToProps(state) { return {} }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...projectActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEdit)
