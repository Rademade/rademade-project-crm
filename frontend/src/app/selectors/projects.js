import { createSelector } from 'reselect'

export default createSelector(
  state => state.projectList,
  (projectList) => {
    console.log('getProjectList changed')
    return projectList
  }
)
