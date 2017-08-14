import http from './http'

const API = '/sprint_invoices'
function getApi(sprintId){
  return `${API}/${sprintId}.pdf`
}
export default {
  get: (sprintId) => http.get(getApi(sprintId))
}

