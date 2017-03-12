import * as types from 'constants/action_types/project'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN } from 'constants/API'

const PATH = '/api/projects'

export function fetchProject(id) {
  return {
    [CALL_API]: {
      endpoint: DOMAIN + PATH + '/'+ id,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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