import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

class DepartmentTableItem extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    const { department } = this.props ;
    return (
       <tr>
         <th>{department.name}</th>
         <th>
           <Link to={ `/departments/${department.id}` }>Edit</Link>
           <button onClick={this.props.onDelete}>Delete</button>
         </th>
       </tr>
    )
  }

}
export default DepartmentTableItem