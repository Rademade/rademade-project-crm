import {
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAILURE,
  CREATE_DEPARTMENT_REQUEST,
  CREATE_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE
} from 'constants/action_types/departments'

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
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, departments: [...action.items] } };

    case GET_DEPARTMENTS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, departments: [] };

    case CREATE_DEPARTMENT_SUCCESS:
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        departments: [...state.departments, action.item ]
      };

    case DELETE_DEPARTMENT_SUCCESS:
      _.remove(state.departments, { id: action.id })
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        departments: [...state.departments]
      };

    case UPDATE_DEPARTMENT_SUCCESS:
      let index  = _.findIndex(state.departments, { id: action.department.id })
      state.departments[index] = action.department
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        departments: [...state.departments]
      };

    default:
      return state

  }
}
