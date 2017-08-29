import http from './http'
const API = '/departments'
function getApi(id){
  return `${API}/${id}`
}
export default {
  get: (data) => http.get(getApi(data.id)),
  create: (department) => http.post(API, department),
  update: (department) => http.put(getApi(department.id), department) }

