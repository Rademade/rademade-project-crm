import React, { Component, PropTypes } from 'react'

import { connect }                       from 'react-redux'
import { bindActionCreators }            from 'redux'
import getDevelopers                    from 'selectors/developers'

import { Route } from 'react-router'
import DeveloperTableItem from './table-item'
class List extends Component {

  render() {
    const { developers, isLoadingPending } = this.props.developersState;
    if (isLoadingPending) { return (<div>Loading</div>)}
    return (
     <table className="table">
        <thead>
          <tr>
            <th>Teammate</th>
            <th>Department</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            developers.map((developer) =>
              <DeveloperTableItem key={developer.id} developer={developer} onDelete={ () => developer.delete() }/>
            )
          }
        </tbody>
      </table>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    developersState: getDevelopers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
