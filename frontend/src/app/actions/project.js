import navigation from 'actions/navigation'
import Project from 'models/project'

export default {
  saveProject: (project) => (dispatch) => {
    new Project(project).save()
    navigation.toProjects()(dispatch)
  }
}

