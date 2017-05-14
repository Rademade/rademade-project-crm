import { toDepartments, toDevelopers, toProjects } from 'actions/navigation'
import Project from 'models/project'

export default {
  saveProject: (project) => (dispatch) => {
    new Project(project).save().then => toProjects(project)(dispatch)
  },
  saveDepartment: (department) => (dispatch) => {
    dispatch(push('/projects'))
  },
  toDevelopers:  (developer) => (dispatch) => {
    dispatch(push('/developers'))
  }
}

