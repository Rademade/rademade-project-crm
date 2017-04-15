import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import DevelopersList from './list/container'
import DeveloperForm from './form/container'
import { Link } from 'react-router-dom'
import _ from 'lodash'


class Developers extends Component {

  constructor() {
    super()
    this.submitNewDeveloper = this.submitNewDeveloper.bind(this)
    this.getDeveloper = this.getDeveloper.bind(this)

  }

  componentDidMount() {
  }

  submitNewDeveloper(developer) {
    if (developer.id){
      this.props.actions.updateDeveloper(developer)
    } else {
      this.props.actions.createDeveloper(developer)
    }
  }

  getDeveloper(id){
    if (id == 'new'){
      return { department: {} }
    } else {
      return _.find(this.props.developers, { id: id*1 } )
    }

  }

  render() {
    return (
      <div>
        <DevelopersList/>
        <Route exact path="/developers" component={ () => { return <Link to="/developers/new">Добавить</Link> } }/>

        <Route path='/developers/:id'
               component={ ({ match }) => { return <DeveloperForm submit={ (developer) => this.submitNewDeveloper(developer) } developer={ this.getDeveloper(match.params.id) } /> } }/>
      </div>
    )
  }

}
export default Developers