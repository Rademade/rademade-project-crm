import { createSelector } from 'reselect'

export default createSelector(
  state => state.departmentsState,
  (departmentsState) => {
    return departmentsState
  }
)
