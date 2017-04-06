import React, { Component} from 'react'
import { Route } from 'react-router'
import Projects from './projects'
import Departments from './departments'

import './style.css'
export default class Layout extends Component {

  constructor(){
    super()
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
          </div>

        </div>
      </div>
    )
  }
}