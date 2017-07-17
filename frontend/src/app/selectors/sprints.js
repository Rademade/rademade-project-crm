import { createSelector } from 'reselect'

export default createSelector(
  state => state.sprintList,
  (sprintList) => {
    console.log('getSprintsList changed')
    return sprintList
  }
)
