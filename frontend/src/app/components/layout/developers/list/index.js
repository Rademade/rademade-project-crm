import React, { Component, PropTypes } from 'react'

import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import getDevelopers          from 'selectors/developers'
import developerActions      from 'actions/developer'
import { Route }              from 'react-router'
import DeveloperTableItem     from './table-item'
class List extends Component {

  componentDidMount(){
    this.props.developerActions.query()
  }

  render() {
    const { developers, isLoadingPending } = this.props.developersState;
    if (isLoadingPending) { return (<div>Loading</div>)}
    return (
     <table className="table">
        <thead>
          <tr>
            <th>Сотрудник</th>
            <th>Отдел</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {
            developers.map((developer) =>
              <DeveloperTableItem key={developer.id} developer={developer} onDelete={ () => this.props.developerActions.delete(developer.id) }/>
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
    developerActions: bindActionCreators(Object.assign({ ...developerActions}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
