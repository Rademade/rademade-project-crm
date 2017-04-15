import * as types from 'constants/action_types/departments'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN, HEADERS } from 'constants/API'
const PATH = '/api/departments'

export function createDepartment(department) {
  return {
    [CALL_API]: {
      endpoint: PATH,
      method: 'POST',
      body: JSON.stringify(department),
      headers: HEADERS,
      types: [
        types.POST_DEPARTMENT_REQUEST,
        {
          type: types.POST_DEPARTMENT_SUCCESS,
          payload: (action, state, res) => res.json().then(department => {
            return department
          })
        },
        types.POST_DEPARTMENT_FAILURE
      ]
    }
  }
}

export function updateDepartment(department) {
  return {
    [CALL_API]: {
      endpoint: PATH + '/' + department.id,
      method: 'PUT',
      body: JSON.stringify(department),
      headers: HEADERS,
      types: [
        types.UPDATE_DEPARTMENT_REQUEST,
        {
          type: types.UPDATE_DEPARTMENT_SUCCESS,
          payload: { department: department }
        },
        types.UPDATE_DEPARTMENT_FAILURE
      ]
    }
  }
}

export function deleteDepartment(id) {
  return {
    [CALL_API]: {
      endpoint: PATH + '/' + id,
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: HEADERS,
      types: [
        types.DELETE_DEPARTMENT_REQUEST,
        {
          type: types.DELETE_DEPARTMENT_SUCCESS,
          payload: { id: id }
        },
        types.DELETE_DEPARTMENT_FAILURE
      ]
    }
  }
}
export function getDepartments() {
  return {
    [CALL_API]: {
      endpoint: DOMAIN + PATH,
      method: 'GET',
      headers: HEADERS,
      types: [
        types.GET_DEPARTMENTS_REQUEST,
        {
          type: types.GET_DEPARTMENTS_SUCCESS,
          payload: (action, state, res) => res.json().then(departments => {
            return { departments: departments }
          })
        },
        types.GET_DEPARTMENTS_FAILURE
      ]
    }
  }
}