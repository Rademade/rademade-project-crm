import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'

import ProjectForm from 'components/layout/projects/form'
import Project from 'models/project'
import projectActions from 'actions/project'
import getEditProjectState from 'selectors/edit-project'

const needToReloadProject = ({ isLoadingPending, project, projectId }) => {
  if (isLoadingPending) return false
  if (!project) return true
  if (project.id != projectId) return true
}

const ProjectEdit = ({ editProjectState, actions, projectId }) => {
  if (needToReloadProject({ projectId: projectId, ...editProjectState })) {
    actions.getProject(projectId)
  }

  if (editProjectState.isLoadingPending) {
    return (<div>Loading...</div>)
  }
  
  return (
    <ProjectForm
      project={ editProjectState.project }
      submit={ actions.saveProject }/>
  )
}

const mapStateToProps = (state) => {
  return {
    editProjectState: getEditProjectState(state)  
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...projectActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEdit)
