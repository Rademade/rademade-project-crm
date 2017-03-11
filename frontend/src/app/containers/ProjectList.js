import React, { Component, PropTypes } from 'react'
import {connect}                       from 'react-redux'
import { bindActionCreators }          from 'redux'
import getProjectList                  from 'selectors/projects'
import * as ProjectActions             from 'actions/projects'

const actions = [ProjectActions]

function mapStateToProps(state) {
  // invoked every time when state changes
  // use reselect
  console.log('mapStateToProps', state)
  return {
    projectList: getProjectList(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ...actions), dispatch)
  }
}

class ProjectList extends Component {

  componentDidMount() {
    const { fetchProjects } = this.props.actions
    // load projects from server
    fetchProjects().then((res) =>
      console.log('res', res, this.props)
    )
  }

  render() {
    const { projectList } = this.props
    console.log('projects', projectList)
    return (
      <div>
        isLoadingError
        { JSON.stringify(projectList) } { projectList.isLoadingPending }
      </div>
    )
  }
}

//ProjectList.propTypes = {
//  projects: PropTypes.array,
//  isLoadingError:  PropTypes.bool
//}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)
