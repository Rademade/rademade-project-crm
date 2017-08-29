import { NEW_DEPARTMENT,
      	 GET_DEPARTMENT_REQUEST,
         GET_DEPARTMENT_SUCCESS,
         GET_DEPARTMENT_FAILURE,
         UPDATE_DEPARTMENT_SUCCESS } from 'constants/action_types/departments'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  department: null
};

export default function department(state = initialState, action) {

  switch (action.type) {

    case GET_DEPARTMENT_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_DEPARTMENT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, department: action.department } };

    case GET_DEPARTMENT_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, department: null };
    
    case UPDATE_DEPARTMENT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, department: action.department } };
    default:
      return state

  }
}
