import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import TeamTableItem from './team-table-item'

const SprintTeamInfo = ({ developers }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Department</th>
        <th>Teammate</th>
        <th>Toggl Time</th>
        <th>Planned</th>
        <th>Percent</th>
      </tr>
    </thead>
    <tbody>
      {
        developers.map((developer) =>
          <TeamTableItem key={developer.id}
                         developer={developer}/>
        )
      }
    </tbody>
  </table>
)
export default SprintTeamInfo
