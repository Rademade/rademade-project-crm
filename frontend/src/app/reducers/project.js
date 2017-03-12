import { NEW_PROJECT,
      	 GET_PROJECT_REQUEST,
         GET_PROJECT_SUCCESS,
         GET_PROJECT_FAILURE } from 'constants/action_types/project'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  project: {}
};

export default function project(state = initialState, action) {

  switch (action.type) {

		case NEW_PROJECT:
      return { ...initialState };

    case GET_PROJECT_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_PROJECT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, project: action.payload.project } };

    case GET_PROJECT_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, project: null };

    default:
      return state

  }
}
