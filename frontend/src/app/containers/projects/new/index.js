import React, { Component, PropTypes } from 'react'
import {connect}                       from 'react-redux'
import { bindActionCreators }          from 'redux'
import getProject                      from 'selectors/project'
import * as ProjectActions             from 'actions/project'
import { Form }                        from 'formsy-react'
import FormProject                     from 'components/Form/FormProject'
const actions = [ProjectActions];

function mapStateToProps(state) {
  return {
    project: getProject(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ...actions), dispatch)
  }
}

class ProjectNew extends Component {

  componentDidMount() {
    const { newProject } = this.props.actions;
    newProject()
  }
  
  render() {
    const { project, actions: { createProject } } = this.props;
    return (
      <FormProject
        project={ project }
        submit={ (project) => createProject(project) }
      />
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNew)
