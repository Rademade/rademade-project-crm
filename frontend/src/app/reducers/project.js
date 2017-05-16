import { NEW_PROJECT,
      	 GET_PROJECT_REQUEST,
         GET_PROJECT_SUCCESS,
         GET_PROJECT_FAILURE } from 'constants/action_types/projects'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  isFormValid: false,
  project: null
};

export default function project(state = initialState, action) {

  switch (action.type) {

    case GET_PROJECT_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_PROJECT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, project: action.item } };

    case GET_PROJECT_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, project: null };

    default:
      return state

  }
}
