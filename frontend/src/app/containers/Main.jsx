import React from 'react'
import {connect} from 'react-redux'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 25
  },
  gridList: {
    width: '100%'
  },
  gridTile: {
    padding: 10
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Main = ({state, actions}) => (
  <div style={styles.root}>
           Hello
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
