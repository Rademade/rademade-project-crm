import React, { Component, PropTypes } from 'react'

export default class View extends Component {

  render() {
    return (<div> { this.props.children } </div>)
  }
}
