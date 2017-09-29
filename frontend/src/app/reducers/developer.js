import { NEW_DEVELOPER,
      	 GET_DEVELOPER_REQUEST,
         GET_DEVELOPER_SUCCESS,
         GET_DEVELOPER_FAILURE,
         UPDATE_DEVELOPER_SUCCESS } from 'constants/action_types/developers'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  developer: null
};

export default function developer(state = initialState, action) {

  switch (action.type) {

    case GET_DEVELOPER_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };


    case GET_DEVELOPER_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, developer: action.developer } };

    case GET_DEVELOPER_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, developer: null };
    
    case UPDATE_DEVELOPER_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, developer: action.developer } };
    default:
      return state

  }
}
