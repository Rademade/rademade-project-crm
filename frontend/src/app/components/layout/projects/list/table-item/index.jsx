import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const ProjectTableItem = ({ project, onDelete, onUpdate }) => (
  <tr>
    <th>{project.name}</th>
    <th>
      <Link to={ `/projects/${project.id}/edit` }>Edit</Link>
      <button onClick={onDelete}>Delete</button>
    </th>
    <th>
      <div>Sprints({project.sprintsCount})</div>
      <button onClick={onUpdate}>Update</button>
    </th>
  </tr>
)
export default ProjectTableItem
