import React, { Component, PropTypes } from  'react'
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr                   from  'react-flatpickr'
import DashboardDeveloperTableItem from  './table-item'
const DashboardDevelopers = ({ developers, reload }) => (
  <div>
    <div>Teammate dashboard</div>
    <Flatpickr
      options={ 
        { 
          mode: 'range',
          maxDate: 'today'
        }
      }
      onChange={(v) => reload(v)}
    />
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
           developers.map((developer, index) =>
             <DashboardDeveloperTableItem
               key={index}
               developer={developer}
             />
           )
         }
       </tbody>
     </table>
   </div>
)

export default DashboardDevelopers
