import { GET_DEPARTMENTS_REQUEST,
         GET_DEPARTMENTS_SUCCESS,
         GET_DEPARTMENTS_FAILURE,
         POST_DEPARTMENT_SUCCESS,
         DELETE_DEPARTMENT_SUCCESS,
         UPDATE_DEPARTMENT_SUCCESS
} from 'constants/action_types/departments'
import _ from 'lodash'


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
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, departments: [...action.payload.departments] } };

    case GET_DEPARTMENTS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, departments: [] };

    case POST_DEPARTMENT_SUCCESS:
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        departments: [...state.departments, action.payload ]
      };

    case DELETE_DEPARTMENT_SUCCESS:
      _.remove(state.departments, { id: action.payload.id })
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        departments: [...state.departments]
      };

    case UPDATE_DEPARTMENT_SUCCESS:
      let index  = _.findIndex(state.departments, { id: action.payload.department.id })
      state.departments[index] = action.payload.department
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
