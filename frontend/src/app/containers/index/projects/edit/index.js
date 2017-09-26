import React, { Component, PropTypes } from  'react'
import { connect }                     from  'react-redux'
import { bindActionCreators }          from  'redux'
import projectActions                  from  'actions/project'
import developersActions               from  'actions/developer'
import ProjectForm                     from  'components/layout/projects/form'

class ProjectEdit extends Component {

  componentWillMount() {
    let project = this.props.projectState.project
    if (!project || this.props.id != project.id){
      this.props.get()
    }

    const developersState = this.props.developersState;
    if (!developersState.isLoadingPending && _.isEmpty(developersState.departments)) {
      this.props.actions.loadDevelopers();
      return (<div>Loading...</div>)
    };
  }

  render() {
    const developersState = this.props.developersState;
    const project = this.props.projectState.project;
    return (
      <ProjectForm
        developers={ developersState.developers }
        initialValues={project}
        buttonName="Сохранить"
        onSubmit={ this.props.actions.update }/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    developersState: state.developersState,
    projectState: state.project
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Object.assign({
    ...projectActions,
    loadDevelopers: developersActions.query
    }), dispatch),
    get: () => dispatch(projectActions.get(ownProps.projectId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEdit)
