import React, { PropTypes, Component } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import sprintActions from 'actions/sprint'
import SprintsTable from 'components/layout/projects/sprints'
import getSprints                       from 'selectors/sprints'

class ProjectSprints extends Component {

  componentDidMount() {
    if (!this.props.sprintList.isLoadingPending) {
      this.props.actions.loadSprints(this.props.projectId)
    }
  }

  render() {

    if (!this.props.sprintList) return (<div>Loading</div>)

    return(
      <div>
        <SprintsTable sprints={this.props.sprintList.sprints}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sprintList: getSprints(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...sprintActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSprints)
