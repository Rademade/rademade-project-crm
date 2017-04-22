import React, { Component} from 'react'
import { Route } from 'react-router'
import Projects from './projects'
import Departments from './departments/container'
import Developers from './developers/container'

import './style.css'
export default class Layout extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

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