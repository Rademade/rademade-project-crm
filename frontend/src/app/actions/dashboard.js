import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_DEVELOPERS_REQUEST
} from 'constants/action_types/dashboard'
export default {
  get: () => {
    return {
      type: GET_DASHBOARD_REQUEST
    }
  },
  getProjects: (month) => {
    return {
      type: GET_DASHBOARD_DEVELOPERS_REQUEST,
      month: month
    }
  }
}

