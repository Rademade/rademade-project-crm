import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import { render } from 'react-dom'

export default class Projects extends Component {

	renderProjectNew() {
		return (
			<Link key="new" to='/projects/new'>Create new project</Link>
		)
	}
  renderProjects() {
    const { projects, actions } = this.props
    return (
      <fieldset>
        { projects.map(project =>
          <Link key="project.id" to='/projects/2'>project.name</Link>
        )}
      </fieldset>
    )
  }

  renderStub() {
    return (
      <div>Stub</div>
    )
  }

  render() {
    let { projects } = this.props;
    let template = null;
    if (_.isEmpty(projects)) {
      template = this.renderStub()
    } else {
      template = this.renderProjects()
    }

    return (
    	<div>
				{ template }
		  	{ this.renderProjectNew() }
		  </div>
		)
  }
}
Projects.propTypes = {
  projects: PropTypes.array.isRequired
}
