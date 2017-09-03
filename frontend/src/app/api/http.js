import axios from 'axios'

import { API } from 'constants/API'
const http = axios.create({
  baseURL: API
});

export default http
