import { createSelector } from 'reselect'

export default createSelector(
  state => state.editProjectState,
  (project) => {
    return project
  }
)
