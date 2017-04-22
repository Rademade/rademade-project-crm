import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

class DeveloperTableItem extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    const { developer } = this.props ;
    return (
       <tr>
         <th>{developer.name}</th>
         <th>{developer.department.name}</th>
         <th>
           <Link to={ `/developers/${developer.id}` }>Edit</Link>
           <button onClick={this.props.onDelete}>Delete</button>
         </th>
       </tr>
    )
  }

}
export default DeveloperTableItem
