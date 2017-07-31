import { GET_SPRINT_REQUEST,
         GET_SPRINT_SUCCESS,
         GET_SPRINT_FAILURE } from 'constants/action_types/sprints'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  sprint: null
};

export default function sprint(state = initialState, action) {

  switch (action.type) {

    case GET_SPRINT_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_SPRINT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, project: action.item } };

    case GET_SPRINT_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, project: null };

    default:
      return state

  }
}
