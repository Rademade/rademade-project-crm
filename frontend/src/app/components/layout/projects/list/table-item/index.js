import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

class ProjectTableItem extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    const { project } = this.props;
    return (
       <tr>
         <th>{project.name}</th>
         <th>
           <Link to={ `/projects/${project.id}` }>Edit</Link>
           <button onClick={this.props.onDelete}>Delete</button>
         </th>
       </tr>
    )
  }

}
export default ProjectTableItem
