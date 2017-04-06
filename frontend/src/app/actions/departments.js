import * as types from 'constants/action_types/departments'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN, HEADERS } from 'constants/API'


const PATH = '/api/departments'

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
            return departments
          })
        },
        types.GET_DEPARTMENTS_FAILURE
      ]
    }
  }
}