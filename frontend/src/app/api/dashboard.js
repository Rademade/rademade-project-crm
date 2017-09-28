import http from './http'
const API = '/dashboard'

const _getDevelopersApi = (fromDate, toDate) => {
  return `${API}/developers?from=${fromDate}&to=${toDate}`
}

export default {
  get: () => http.get(API),
  getDevelopers: (from, to) => http.get(_getDevelopersApi(from, to))
}

