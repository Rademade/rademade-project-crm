import axios from 'axios'
import changeCaseKeys from 'change-case-keys'
import { API } from 'constants/API'

const http = axios.create({
  baseURL: API,
  transformResponse: [function (data) {
    if (!data) { return data }
    return changeCaseKeys(JSON.parse(data), 'camelize')
  }],
  transformRequest: [function (data, headers) {
    headers['Content-Type'] = 'application/json'
    if (!data) { return data }
    return JSON.stringify(changeCaseKeys(data, 'underscored'))
  }]
});

export default http
