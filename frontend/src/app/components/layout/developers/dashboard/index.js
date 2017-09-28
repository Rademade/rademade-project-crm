import React, { Component, PropTypes } from  'react'
import DashboardDeveloperTableItem     from  './table-item'
const DashboardDevelopers = ({ actions, developers }) => (
  <div>
    <div>Teammage dashboard</div>
    <div>datepicker</div>
    <table className="table">
       <thead>
         <tr>
           <th>Сотрудник</th>
           <th>Отдел</th>
           <th>Управление</th>
         </tr>
       </thead>
       <tbody>
         {
           developers.map((developer) =>
             <DashboardDeveloperTableItem
               key={developer.id}
               developer={developer}
             />
           )
         }
       </tbody>
     </table>
   </div>
)

export default DashboardDevelopers
