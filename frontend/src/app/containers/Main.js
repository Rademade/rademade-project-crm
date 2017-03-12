import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu                   from 'components/Menu'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {}
}

class Main extends Component {

  render() {
    return (
      <div>
				<Menu/>
				<div>
					{ this.props.children }
				</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
