
import { createSelector } from 'reselect'

export default createSelector(
  state => state.sprintState,
  (sprint) => {
    return sprint
  }
)
