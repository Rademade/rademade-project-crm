import React       from  'react'
import { Route }   from  'react-router'
import Dashboard   from  'containers/index/dashboard'
import Projects    from  'containers/index/projects'
import Departments from  'containers/index/departments'
import Developers  from  'containers/index/developers'

const Layout = () => (
  <div className="container-fluid text-center">
    <div className="row content">
      <div className="col-sm-8 text-left center-container">
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/departments" component={Departments}/>
        <Route path="/developers" component={Developers}/>
      </div>
    </div>
  </div>
)
export default Layout
