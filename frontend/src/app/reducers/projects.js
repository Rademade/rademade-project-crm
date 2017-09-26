import { GET_PROJECTS_REQUEST,
         GET_PROJECTS_SUCCESS,
         GET_PROJECTS_FAILURE,
         CREATE_PROJECT_SUCCESS,
         UPDATE_PROJECT_SUCCESS
} from 'constants/action_types/projects'

const initialState = {
  isLoadingError: false,
  isLoadingPending: false,
  isLoadingSuccess: false,
  projects: []
};

export default function projectList(state = initialState, action) {

  switch (action.type) {

    case GET_PROJECTS_REQUEST:
      return { ...state, ...{ isLoadingPending: true, isLoadingError: false, isLoadingSuccess: false } };

    case GET_PROJECTS_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingSuccess: true, projects: [...action.projects] } };

    case GET_PROJECTS_FAILURE:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, projects: [] };

    case CREATE_PROJECT_SUCCESS:
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, projects: [...state.projects, action.project] };

    case UPDATE_PROJECT_SUCCESS:
      const i = _.findIndex(state.projects, (p) => p.id == action.project.id)
      state.projects.splice(i, 1, action.project)
      return { ...state, ...{ isLoadingPending: false, isLoadingError: true, isLoadingSuccess: false }, projects: [...state.projects] };

   default:
      return state

  }
}
