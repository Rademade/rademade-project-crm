export default {
  query: () => {
    return {
      type: 'GET_DEVELOPERS_REQUEST'
    }
  },
  get: (id) => {
    return {
      type: 'GET_DEVELOPER_REQUEST',
      id: id
    }
  },
  update: (developer) => {
    return {
      type: 'UPDATE_DEVELOPER_REQUEST',
      developer: developer
    } 
  },
  create: (developer) => {
    return {
      type: 'CREATE_DEVELOPER_REQUEST',
      developer: developer
    } 
  },
  delete: (developerId) => {
    return {
      type: 'DELETE_DEVELOPER_REQUEST',
      developerId: developerId
    } 
  }

}

