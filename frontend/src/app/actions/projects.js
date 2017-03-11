import * as types from 'constants/action_types/projects'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN } from 'constants/API'

const PATH = '/api/projects'

export function fetchProjects() {
  return {
    [CALL_API]: {
      endpoint: DOMAIN + PATH,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      types: [
        types.GET_PROJECTS_REQUEST,
        {
          type: types.GET_PROJECTS_SUCCESS,
          payload: (action, state, res) => res.json().then(projects => {
            return { projects: projects }
          })
        },
        types.GET_PROJECTS_FAILURE
      ]
    }
  }
}
