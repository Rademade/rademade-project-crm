import {push} from 'react-router-redux'

export default {
  toDepartments: () => (dispatch) => dispatch(push('/departments')),
  toProjects:    () => (dispatch) => dispatch(push('/projects')),
  toDevelopers:  () => (dispatch) => dispatch(push('/developers'))
}
