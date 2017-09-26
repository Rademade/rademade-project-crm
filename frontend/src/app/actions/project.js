import navigation from 'actions/navigation'
export default {
  query: () => {
    return {
      type: 'GET_PROJECTS_REQUEST'
    }
  },
  get: (id) => {
    return {
      type: 'GET_PROJECT_REQUEST',
      id: id
    }
  },
  update: (project) => {
    return {
      type: 'UPDATE_PROJECT_REQUEST',
      project: project
    } 
  },
  create: (project) => {
    return {
      type: 'CREATE_PROJECT_REQUEST',
      project: project
    } 
  },
  delete: (id) => {
    return {
      type: 'DELETE_PROJECT_REQUEST',
      id: id
    } 
  }
}

