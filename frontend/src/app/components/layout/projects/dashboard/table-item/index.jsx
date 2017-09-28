import React, { Component, PropTypes } from  'react'

const DashboardProjectTableItem = ({ project }) => (
  <tr>
    <th>{project.name}</th>
    <th>{project.sprintsCount}</th>
    <th>{project.velocity}</th>
    <th>{project.progress}</th>
    <th>{project.totalSp}</th>
    <th>{project.leftSprints}</th>
    <th>{project.name}</th>
  </tr>
)
export default DashboardProjectTableItem
