import navigation from 'actions/navigation'
export default {
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
  }

}

