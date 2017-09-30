import http from './http'
const API = '/dashboard'
import qs from 'qs'
const _getDevelopersApi = (params) => {
  return `${API}/developers?${qs.stringify(params)}`
}
export default {
  get: () => http.get(API),
  getDevelopers: (params) => http.get(_getDevelopersApi(params))
}

