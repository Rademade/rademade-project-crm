import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import developersActions               from 'actions/developer'
import departmentsActions              from 'actions/departments'
import getEditDepartmentState          from 'selectors/edit-department'
import DeveloperForm                   from 'components/layout/developers/form'

class DeveloperEdit extends Component {

  componentWillMount() {

    let developer = this.props.developerState.developer
    if (!developer || this.props.id != developer.id){
      this.props.get()
    }

    const departmentsState = this.props.departmentsState;
    if (!departmentsState.isLoadingPending && _.isEmpty(departmentsState.departments)) {
      this.props.actions.loadDepartments();
      return (<div>Loading...</div>)
    };
  }
  render() {
    const departmentsState = this.props.departmentsState;
    const developer = this.props.developerState.developer;
    return (
      <DeveloperForm
        departments={ departmentsState.departments }
        initialValues={developer}
        buttonName="Сохранить"
        onSubmit={ this.props.actions.update }/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    departmentsState: state.departmentsState,
    developerState: state.developer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Object.assign({ ...developersActions, loadDepartments: departmentsActions.query }), dispatch),
    get: () => dispatch(developersActions.get(ownProps.id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperEdit)
