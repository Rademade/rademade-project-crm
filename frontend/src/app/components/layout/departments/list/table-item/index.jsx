import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const DepartmentTableItem =({ department, onDelete }) => (
  <tr>
    <th>{department.name}</th>
    <th>
      <Link to={ `/departments/${department.id}/edit` }>Edit</Link>
      <button onClick={onDelete}>Delete</button>
    </th>
  </tr>
)

export default DepartmentTableItem
