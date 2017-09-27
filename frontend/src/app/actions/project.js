import {
  GET_PROJECTS_REQUEST,
  GET_PROJECT_REQUEST,
  JIRA_SYNCHRONIZE_PROJECT_REQUEST,
  UPDATE_PROJECT_REQUEST,
  DELETE_PROJECT_REQUEST,
  CREATE_PROJECT_REQUEST
} from 'constants/action_types/projects'
import navigation from 'actions/navigation'
export default {
  query: () => {
    return {
      type: GET_PROJECTS_REQUEST
    }
  },
  get: (id) => {
    return {
      type: GET_PROJECT_REQUEST,
      id: id
    }
  },
  update: (project) => {
    return {
      type: UPDATE_PROJECT_REQUEST,
      project: project
    } 
  },
  jiraSync: (id) => {
    return {
      type: JIRA_SYNCHRONIZE_PROJECT_REQUEST,
      id: id 
    }
  },
  create: (project) => {
    return {
      type: CREATE_PROJECT_REQUEST,
      project: project
    } 
  },
  delete: (id) => {
    return {
      type: DELETE_PROJECT_REQUEST,
      id: id
    } 
  }
}

