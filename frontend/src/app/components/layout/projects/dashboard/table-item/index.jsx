import React, { Component, PropTypes } from  'react'
import _                               from  'lodash'
const _leftSp = (project) => {
  return project.totalStoryPoints - project.completeSp
}
const _leftSprints = (project) => {
  return _.round(_leftSp(project) / project.velocity)
}
const _completeSp = (project) => {
  return _.round(project.completeSp / project.totalStoryPoints * 100, 2)
}

const _leftMonth = (project) => {
  return project.sprintDuration * _leftSprints(project) / 30
}
const DashboardProjectTableItem = ({ project }) => (
  <tr>
    <th>{project.name}</th>
    <th>{project.sprintsCount}</th>
    <th>{project.velocity}</th>
    <th>{_completeSp(project)}%</th>
    <th>{project.totalStoryPoints}</th>
    <th>{_leftSprints(project)}</th>
    <th>{_leftMonth(project)}</th>
    <th>{project.lastSprintDate}</th>
  </tr>
)
export default DashboardProjectTableItem
