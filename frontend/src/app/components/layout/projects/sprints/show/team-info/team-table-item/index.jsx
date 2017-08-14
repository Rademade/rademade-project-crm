import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const TeamTableItem = ({ developer }) => (
  <tr>
    <th>{developer.department}</th>
    <th>{developer.name}</th>
    <th>{developer.toggleTime}</th>
    <th>{developer.plannedTime}</th>
    <th>{developer.percent} %</th>
  </tr>
);
export default TeamTableItem
