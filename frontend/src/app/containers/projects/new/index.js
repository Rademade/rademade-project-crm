import React, { Component, PropTypes } from 'react'
import {connect}                       from 'react-redux'
import { bindActionCreators }          from 'redux'
import getProject                      from 'selectors/project'
import * as ProjectActions             from 'actions/project'

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
    const { project, actions } = this.props;
    return (
      <div>
				 new project form
      </div>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNew)
