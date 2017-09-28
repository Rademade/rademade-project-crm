import navigation from 'actions/navigation'
export default {
  query: () => {
    return {
      type: 'GET_DEPARTMENTS_REQUEST'
    }
  },
  get: (id) => {
    return {
      type: 'GET_DEPARTMENT_REQUEST',
      id: id
    }
  },
  update: (department) => {
    return {
      type: 'UPDATE_DEPARTMENT_REQUEST',
      department: department
    } 
  },
  create: (department) => {
    return {
      type: 'CREATE_DEPARTMENT_REQUEST',
      department: department
    } 
  },
  delete: (id) => {
    return {
      type: 'DELETE_DEPARTMENT_REQUEST',
      id: id
    }
  }
}

