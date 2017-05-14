import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getDevelopers                    from 'selectors/developers'

import DevelopersList from 'components/layout/developers/list'
import DeveloperNew from './new'
import DeveloperEdit from './edit'

import Developer from 'models/developer'
import { Link } from 'react-router-dom'
import _ from 'lodash'
class Developers extends Component {

  constructor(props) {
    super(props)
    Developer.query()
    this.getDeveloper = this.getDeveloper.bind(this)
  }

  getDeveloper(id){
    return _.find(this.props.developers, { id: parseInt(id) } )
  }

  render() {
    return (
      <div>
        <DevelopersList/>
        
        <Route exact
               path="/developers"
               component={ () => { return <Link to="/developers/new">Добавить</Link> } }/>

        <Route path='/developers/new'
               component={ ({ match }) => { return <DeveloperNew/> } }/>
             
        <Route path='/developers/:id/edit'
               component={ ({ match }) => { return <DeveloperEdit developer={ this.getDeveloper(match.params.id) } /> } }/>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    developers: getDevelopers(state).developers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developers)
