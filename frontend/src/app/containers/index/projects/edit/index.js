import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'

import ProjectForm from 'components/layout/projects/form'
import Project from 'models/project'
import projectActions from 'actions/project'

const ProjectEdit = (props) => (
  <ProjectForm
    project={props.project}
    submit={ (project) => props.actions.saveProject(project) }/>
)

const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...projectActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEdit)
