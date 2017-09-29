import React, { Component, PropTypes } from  'react'
import DashboardProjectTableItem       from  './table-item'

const DashboardProjectList = ({actions, projects}) => (
      <table className="table">
        <thead>
          <tr>
            <th>Название проекта</th>
            <th>Спринты</th>
            <th>Velocity</th>
            <th>%</th>
            <th>Total backlog</th>
            <th>Left sprints</th>
            <th>Left months</th>
            <th>Last reported sprint</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map((project) =>
              <DashboardProjectTableItem
                key={project.id}
                project={project}
              />
            )
          }
        </tbody>
      </table>
)
export default DashboardProjectList
