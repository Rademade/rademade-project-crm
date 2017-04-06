import React, { Component, PropTypes } from 'react'
import {connect}                       from 'react-redux'
import { bindActionCreators }          from 'redux'
import getProjectList                  from 'selectors/projects'
import * as ProjectActions             from 'actions/projects'
import Projects                        from 'components/Projects'

const actions = [ProjectActions]

function mapStateToProps(state) {
  return {
    projectList: getProjectList(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ...actions), dispatch)
  }
}

class ProjectsIndex extends Component {

  componentDidMount() {
    const { fetchProjects } = this.props.actions
    fetchProjects()
  }

  render() {
    const { projectList, actions } = this.props;
    return (
      <div>
        wdwd
        <Projects
          projects={ projectList.projects }
          actions= { actions }
        />
        { this.props.children }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex)
