import { createSelector } from 'reselect'

export default createSelector(
  state => state.editDeveloperState,
  (developer => {
    return developer
  }
)
