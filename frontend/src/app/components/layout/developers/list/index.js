import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DeveloperTableItem from './table-item'

class List extends Component {

  constructor(){
    super()

  }

  componentDidMount() {
    this.props.actions.getDevelopers()
  }
  componentDidUpdate(){
    console.log('componentDidUpdate', this.props)
  }

  render() {
    const { developers, isLoadingPending } = this.props.developersState;
    if (isLoadingPending) { return (<div>Loading</div>)}
    return (
     <table className="table">
        <thead>
          <tr>
            <th>Teammate</th>
            <th>Department</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            developers.map((developer) =>
              <DeveloperTableItem key={developer.id} developer={developer} onDelete={ () => this.props.actions.deleteDeveloper(developer.id) }/>
            )
          }
        </tbody>
      </table>
    )
  }

}
export default List