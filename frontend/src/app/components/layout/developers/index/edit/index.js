import React, { Component, PropTypes } from 'react'
import Developer from 'models/developer'
import DeveloperForm from 'components/layout/developers/form/container';
class DeveloperEdit extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(developer) {
    new Developer(developer).save()
  }
  
  render() {
    return (
      <DeveloperForm developer={this.props.developer} submit={this.onSubmit}/>
    )
  }

}
DeveloperEdit.propTypes = {
}
export default DeveloperEdit
