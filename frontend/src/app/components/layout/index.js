import React, { Component } from 'react'
import { Route } from 'react-router'
import Projects from 'containers/index/projects'
import Departments from 'containers/index/departments'
import Developers from 'containers/index/developers'

export default class Layout extends Component {

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-8 text-left center-container">
            <Route path="/projects" component={Projects}/>
            <Route path="/departments" component={Departments}/>
            <Route path="/developers" component={Developers}/>
          </div>
        </div>
      </div>
    )
  }
}
