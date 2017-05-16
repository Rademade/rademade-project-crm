import React, { PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import projectActions from 'actions/project'
import ProjectForm from 'components/layout/projects/form'

const ProjectNew = ({ actions }) => (
  <ProjectForm
    project={ {} }
    submit={ actions.saveProject }/>
)

function mapStateToProps(state) { return {} }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...projectActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNew)
