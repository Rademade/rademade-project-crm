import { GET_DASHBOARD_REQUEST,
         GET_DASHBOARD_SUCCESS,
         GET_DASHBOARD_DEVELOPERS_SUCCESS,
         GET_DASHBOARD_FAILURE } from 'constants/action_types/dashboard'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  projects: [],
  developers: []
};

export default function dashboard(state = initialState, action) {

  switch (action.type) {

    case GET_DASHBOARD_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoadingPending: false,
        isLoadingSuccess: true,
        projects: aciton.projects,
        developers: aciton.developers
      };
    case GET_DASHBOARD_DEVELOPERS_SUCCESS:
      return {
        ...state,
        developers: aciton.developers
      };

    case GET_DASHBOARD_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false } };

    default:
      return state

  }
}
