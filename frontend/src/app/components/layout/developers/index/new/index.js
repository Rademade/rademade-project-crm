import React, { Component, PropTypes } from 'react'
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
export default DeveloperNew
