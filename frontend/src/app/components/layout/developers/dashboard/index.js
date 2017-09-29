import React, { Component, PropTypes } from  'react'
import DashboardDeveloperTableItem     from  './table-item'
const DashboardDevelopers = ({ actions, developers }) => (
  <div>
    <div>Teammage dashboard</div>
    <div>Datepicker</div>
    <table className="table">
       <thead>
         <tr>
           <th>Сотрудник</th>
           <th>Время по плану</th>
           <th>Время по тоглy</th>
           <th>%</th>
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
