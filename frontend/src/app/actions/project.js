import * as types from 'constants/action_types/project'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN } from 'constants/API'
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
const PATH = DOMAIN + '/api/projects'

export function fetchProject(id) {
  return {
    [CALL_API]: {
      endpoint: PATH + '/'+ id,
      method: 'GET',
      headers: HEADERS,
      types: [
        types.GET_PROJECT_REQUEST,
        {
          type: types.GET_PROJECT_SUCCESS,
          payload: (action, state, res) => res.json().then(project => {
            return { project: project }
          })
        },
        types.GET_PROJECT_FAILURE
      ]
    }
  }
}

export function newProject() {
  return {
  	type: types.NEW_PROJECT
  }
}

export function createProject(project) {
  return {
    [CALL_API]: {
      endpoint: PATH,
      method: 'POST',
      body: JSON.stringify(project),
      headers: HEADERS,
      types: [
        types.POST_PROJECT_REQUEST,
        {
          type: types.POST_PROJECT_SUCCESS,
          payload: (action, state, res) => res.json().then(project => {
            return { project: project }
          })
        },
        types.POST_PROJECT_FAILURE
      ]
    }
  }
}