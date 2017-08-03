import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const SprintBasicInfo = ({ sprint }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Column</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Date start</th>
        <th>{sprint.startAt}</th>
      </tr>
      <tr>
        <th>Date end</th>
        <th>{sprint.endAt}</th>
      </tr>
      <tr>
        <th>SP</th>
        <th>{sprint.sprintStoryPoint}</th>
      </tr>
      <tr>
        <th>Toggle Time</th>
        <th>{sprint.toggleTime}</th>
      </tr>
    </tbody>
  </table>
)
export default SprintBasicInfo
