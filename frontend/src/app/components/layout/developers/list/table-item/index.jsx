import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const DepartmentName = ({ department }) => {
  let name = ''
  if (department) {
    name = department.name
  }
  return (  <th>{ name }</th> )
}

const DeveloperTableItem = ({ developer, onDelete }) => (
   <tr>
     <th>{developer.name}</th>
     <DepartmentName department={ developer.department }/>
     <th>
       <Link to={ `/developers/${developer.id}/edit` }>Edit</Link>
       <button onClick={onDelete}>Delete</button>
     </th>
   </tr>
)
export default DeveloperTableItem
