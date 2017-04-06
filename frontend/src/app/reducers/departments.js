import { GET_DEPARTMENTS_REQUEST,
         GET_DEPARTMENTS_SUCCESS,
         GET_DEPARTMENTS_FAILURE } from 'constants/action_types/departments'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  departments: []
};

export default function departmentsState(state = initialState, action) {

  switch (action.type) {

    case GET_DEPARTMENTS_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

      case GET_DEPARTMENTS_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, projects: [...action.payload.departments] } };

    case GET_DEPARTMENTS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, departments: [] };

    default:
      return state

  }
}
