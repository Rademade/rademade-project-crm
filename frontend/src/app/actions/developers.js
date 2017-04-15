import * as types from 'constants/action_types/developers'
import { CALL_API } from 'redux-api-middleware'
import { DOMAIN, HEADERS } from 'constants/API'
const PATH = '/api/developers'

export function createDeveloper(developer) {
  return {
    [CALL_API]: {
      endpoint: PATH,
      method: 'POST',
      body: JSON.stringify(developer),
      headers: HEADERS,
      types: [
        types.POST_DEVELOPER_REQUEST,
        {
          type: types.POST_DEVELOPER_SUCCESS,
          payload: (action, state, res) => res.json().then(developer => {
            return developer
          })
        },
        types.POST_DEVELOPER_FAILURE
      ]
    }
  }
}

export function updateDeveloper(developer) {
  return {
    [CALL_API]: {
      endpoint: PATH + '/' + developer.id,
      method: 'PUT',
      body: JSON.stringify(developer),
      headers: HEADERS,
      types: [
        types.UPDATE_DEVELOPER_REQUEST,
        {
          type: types.UPDATE_DEVELOPER_SUCCESS,
          payload: { developer: developer }
        },
        types.UPDATE_DEVELOPER_FAILURE
      ]
    }
  }
}

export function deleteDeveloper(id) {
  return {
    [CALL_API]: {
      endpoint: PATH + '/' + id,
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: HEADERS,
      types: [
        types.DELETE_DEVELOPER_REQUEST,
        {
          type: types.DELETE_DEVELOPER_SUCCESS,
          payload: { id: id }
        },
        types.DELETE_DEVELOPER_FAILURE
      ]
    }
  }
}
export function getDevelopers() {
  return {
    [CALL_API]: {
      endpoint: DOMAIN + PATH,
      method: 'GET',
      headers: HEADERS,
      types: [
        types.GET_DEVELOPERS_REQUEST,
        {
          type: types.GET_DEVELOPERS_SUCCESS,
          payload: (action, state, res) => res.json().then(developers => {
            return { developers: developers }
          })
        },
        types.GET_DEVELOPERS_FAILURE
      ]
    }
  }
}