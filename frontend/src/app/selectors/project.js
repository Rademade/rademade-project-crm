import { createSelector } from 'reselect'

export default createSelector(
  state => state.project,
  (project) => {
    console.log('project changed')
    return project
  }
)
