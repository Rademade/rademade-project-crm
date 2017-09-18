import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import developersActions               from 'actions/developer'
import departmentsActions              from 'actions/departments'
import DeveloperForm                   from 'components/layout/developers/form'
class DeveloperNew extends Component {

  componentWillMount() {

    const departmentsState = this.props.departmentsState;
    if (!departmentsState.isLoadingPending && _.isEmpty(departmentsState.departments)) {
      this.props.actions.loadDepartments();
      return (<div>Loading...</div>)
    };
  }
  render() {
    const departmentsState = this.props.departmentsState;
    return (
      <DeveloperForm
        departments={ departmentsState.departments }
        buttonName="Добавить"
        onSubmit={ this.props.actions.create }/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    departmentsState: state.departmentsState
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Object.assign({ ...developersActions, loadDepartments: departmentsActions.query }), dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperNew)
