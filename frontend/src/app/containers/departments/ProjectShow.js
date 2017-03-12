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

class ProjectShow extends Component {

  componentDidMount() {
    const { actions, routeParams } = this.props;
    const { fetchProject } = actions;
    fetchProject(routeParams.id);
  }

  renderStub() {
	  return (
			<div>Loading...</div>
		)
	}
	
  renderProject() {
  	const { project, actions } = this.props;
	  return (
			<div>
        { project.project.name }
      </div>
		)
	}
		

  render() {
    const { project, actions } = this.props;
    let template = null;
    if (project.isLoadingPending) {
			template = this.renderStub();
		} else {
			template = this.renderProject();
		}
		return ( <div> { template } </div> )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow)
