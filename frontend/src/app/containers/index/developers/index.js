import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'

import DevelopersList from 'components/layout/developers/list'
import DeveloperNew from './new'
import DeveloperEdit from './edit'

import Developer from 'models/developer'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import store from 'store'
import { push } from 'react-router-redux'
class Developers extends Component {

  constructor(props) {
    super(props)
    this.getDeveloper = this.getDeveloper.bind(this)
  }

  componentDidMount() {

  }

  submitNewDeveloper(developer) {
    new Developer(developer).save()
    store.dispatch(push('/developers'))
  }

  getDeveloper(id){
    return _.find(this.props.developers, { id: parseInt(id) } )
  }

  render() {
    return (
      <div>
        <DevelopersList/>
        
        <Route exact path="/developers" component={ () => { return <Link to="/developers/new">Добавить</Link> } }/>

        <Route path='/developers/new'
               component={ ({ match }) => { return <DeveloperNew/> } }/>
             
        <Route path='/developers/:id/edit'
               component={ ({ match }) => { return <DeveloperEdit developer={ this.getDeveloper(match.params.id) } /> } }/>
      </div>
    )
  }

}
export default Developers
