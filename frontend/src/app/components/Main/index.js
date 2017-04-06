import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu                   from 'components/Menu'

export default class Main extends Component {

  render() {
    return (
      <div>
        <div
          style={ menuLayoutStyle }
          children={ <Menu/> }
        />
        <div
          style={ viewStyles }
          children={ this.props.children }
        />
      </div>
    )
  }
}