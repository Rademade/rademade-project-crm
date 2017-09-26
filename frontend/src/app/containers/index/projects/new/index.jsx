import React, { PropTypes, Component } from  'react'
import { connect }                     from  'react-redux'
import { bindActionCreators }          from  'redux'
import projectActions                  from  'actions/project'
import developersActions               from  'actions/developer'
import ProjectForm                     from  'components/layout/projects/form'

class ProjectNew extends Component {

  componentWillMount() {
    const developersState = this.props.developersState;
    if (!developersState.isLoadingPending && _.isEmpty(developersState.departments)) {
      this.props.actions.loadDevelopers();
      return (<div>Loading...</div>)
    };
  }

  render() {
    const developersState = this.props.developersState;
    return (
      <ProjectForm
        developers={ developersState.developers }
        buttonName="Добавить"
        onSubmit={ this.props.actions.create }/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    developersState: state.developersState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({
    ...projectActions,
    loadDevelopers: developersActions.query
    }), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNew)
