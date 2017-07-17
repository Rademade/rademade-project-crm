import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const SprintTableItem = ({ sprint, onUpdate }) => (
  <tr>
    <th>{sprint.name}</th>
    <th>{sprint.startAt}</th>
    <th>{sprint.endAt}</th>
    <th>{sprint.sprintStoryPoint}</th>
    <th>{sprint.completeSp}</th>
    <th>{sprint.totalStoryPoints}</th>
    <th>{sprint.complete}</th>
    <th>{sprint.togglTime}</th>
    <th>
      <button onClick={onUpdate}>Update</button>
    </th>
  </tr>
)
export default SprintTableItem
