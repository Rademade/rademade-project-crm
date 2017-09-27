import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const SprintTableItem = ({ sprint, onUpdate }) => (
  <tr>
    <th>{sprint.name}</th>
    <th>{sprint.startAt}</th>
    <th>{sprint.endAt}</th>
    <th>{sprint.sprintStoryPoint}</th>
    <th>{sprint.completeStoryPoints}</th>
    <th>{sprint.totalStoryPoints}</th>
    <th>{sprint.completeStoryPointsRate}</th>
    <th>{sprint.toggleTime}</th>
    <th>
      <Link to={ `/projects/${sprint.projectId}/sprints/${sprint.id}/edit` }>Edit</Link>
    </th>
    <th>
      <button onClick={onUpdate}>Update</button>
    </th>
  </tr>
)
export default SprintTableItem
