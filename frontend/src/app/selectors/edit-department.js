import { createSelector } from 'reselect'

export default createSelector(
  state => state.editDepartmentState,
  (department) => {
    return department
  }
)
