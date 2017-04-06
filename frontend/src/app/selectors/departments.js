import { createSelector } from 'reselect'

export default createSelector(
  state => state.departments,
  (departments) => {
    return departments
  }
)
