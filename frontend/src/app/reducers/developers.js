import { GET_DEVELOPERS_REQUEST,
         GET_DEVELOPERS_SUCCESS,
         GET_DEVELOPERS_FAILURE,
         CREATE_DEVELOPER_SUCCESS,
         DELETE_DEVELOPER_SUCCESS,
         UPDATE_DEVELOPER_SUCCESS
} from 'constants/action_types/developers'
import _ from 'lodash'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  developers: []
};

export default function developersState(state = initialState, action) {

  switch (action.type) {

    case GET_DEVELOPERS_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_DEVELOPERS_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, developers: [...action.items] } };

    case GET_DEVELOPERS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, developers: [] };

    case CREATE_DEVELOPER_SUCCESS:
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        developers: [...state.developers, action.item ]
      };

    case DELETE_DEVELOPER_SUCCESS:
      _.remove(state.developers, { id: action.id })
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        developers: [...state.developers]
      };

    case UPDATE_DEVELOPER_SUCCESS:
      let index  = _.findIndex(state.developers, { id: action.item.id })
      state.developers[index] = action.item
      return {
        isLoadingPending: false,
        isLoadingError: false,
        isLoadingSuccess: true,
        developers: [...state.developers]
      };

    default:
      return state

  }
}
