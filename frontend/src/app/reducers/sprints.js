import { GET_SPRINTS_REQUEST,
         GET_SPRINTS_SUCCESS,
         GET_SPRINTS_FAILURE,
         CREATE_SPRINT_SUCCESS,
         UPDATE_SPRINT_SUCCESS
} from 'constants/action_types/sprints'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  sprints: []
};

export default function sprintList(state = initialState, action) {

  switch (action.type) {

    case GET_SPRINTS_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_SPRINTS_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, sprints: [...action.items] } };

    case GET_SPRINTS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, sprints: [] };

    case CREATE_SPRINT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, sprints: [...state.sprints, action.item] };

    case UPDATE_SPRINT_SUCCESS:
      const i = _.findIndex(state.sprints, (p) => p.id == action.item.id)
      state.sprints.splice(i, 1, action.item)
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, sprints: [...state.sprints] };

   default:
      return state

  }
}
