import http from './http'
const API = '/developers'
function getApi(id){
  return `${API}/${id}`
}
export default {
  query  : (data)        => http.get(API),
  get  : (data)        => http.get(getApi(data.id)),
  create : (developer)   => http.post(API, developer),
  update : (developer)   => http.put(getApi(developer.id), developer),
  delete : (developerId) => http.delete(getApi(developerId))
}

