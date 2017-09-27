import http from './http'
const API = '/projects'
function getApi(id){
  return `${API}/${id}`
}
function getSyncApi(id) {
  return `jira_synchronize${getApi(id)}`
}

export default {
  query  : (data)      => http.get(API),
  get  : (data)        => http.get(getApi(data.id)),
  create : (project)   => http.post(API, project),
  update : (project)   => http.put(getApi(project.id), project),
  delete : (projectId) => http.delete(getApi(projectId)),
  jiraSync : (id)      => http.put(getSyncApi(id))
}

