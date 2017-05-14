import React, { Component, PropTypes } from 'react'
import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import  navigationActions                from 'actions/navigation'

import Developer from 'models/developer'
import DeveloperForm from 'components/layout/developers/form/container';
class DeveloperNew extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(developer) {
    new Developer(developer).save()
    this.props.actions.toDepartments()
  }
  
  render() {
    return (
      <DeveloperForm developer={ {} } submit={this.onSubmit}/>
    )
  }

}
DeveloperNew.propTypes = {
}
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({ ...navigationActions }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperNew)
