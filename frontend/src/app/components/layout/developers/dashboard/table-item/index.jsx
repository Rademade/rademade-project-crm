import React, { Component, PropTypes } from 'react'
const DEVELOPER_MONTH_TIME = 120
const _timeProgress = (developer) => {
  return _.round(developer.toggleTime / DEVELOPER_MONTH_TIME / 3600 * 100, 2)
}
const _formatToggleTime = (seconds) => {
  return [seconds / 3600, seconds / 60 % 60, seconds % 60].map((t) => _.round(t)).join(':')
}
const DashboardDeveloperTableItem = ({ developer }) => (
   <tr>
     <th>{developer.name}</th>
     <th>{DEVELOPER_MONTH_TIME}</th>
     <th>{_formatToggleTime(developer.toggleTime)}</th>
     <th>{_timeProgress(developer)}%</th>
   </tr>
)
export default DashboardDeveloperTableItem
