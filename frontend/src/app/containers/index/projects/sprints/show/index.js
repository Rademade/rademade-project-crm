import React, { Component, PropTypes }   from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'

import sprintActions from 'actions/sprint'
import getSprintState from 'selectors/sprint'
import SprintBasicInfo from 'components/layout/projects/sprints/show/basic-info'
import SprintTeamInfo from 'components/layout/projects/sprints/show/team-info'

const needToReloadSprint = ({ isLoadingPending,  sprint, sprintId }) => {
  if (isLoadingPending) return false
  if (!sprint) return true
  if (sprint.id != sprintId) return true
}

const SprintShow = ({ sprintState, actions, sprintId }) => {

  if (needToReloadSprint({ sprintId: sprintId, ...sprintState })) {
    actions.getSprint(sprintId)
    return (<div>Loading...</div>)
  }

  if (sprintState.isLoadingPending) {
    return (<div>Loading...</div>)
  }
  return (
    <div>
      <SprintBasicInfo sprint={sprintState.sprint}/>
      <SprintTeamInfo developers={sprintState.sprint.developers}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sprintState: getSprintState(state)
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({ ...sprintActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SprintShow)
