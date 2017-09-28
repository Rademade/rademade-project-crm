import React, { Component }   from  'react'
import { connect }            from  'react-redux'
import { bindActionCreators } from  'redux'
import DashboardProjects      from  'components/layout/projects/dashboard'
import DashboardDevelopers    from  'components/layout/developers/dashboard'
import dashboardActions       from  'actions/dashboard'

class Dashboard extends Component {

  componentWillMount(){
    this.props.dashboardActions.get()
  }

  render() {
    const dashboard = this.props.dashboard;
    if (!dashboard.isLoadingSuccess) { return (<div>Идет загрузка...</div>) }
    return (
      <div>
        <DashboardProjects
          projects={ bashboard.projects }/>
        <DashboardDevelopers 
          developers={ dashboard.developers }
          reload={ this.props.dashboardActions.reloadDevelopers }/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(Object.assign({...dashboardActions}), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
