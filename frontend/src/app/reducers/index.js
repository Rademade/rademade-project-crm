import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import editProjectState     from 'reducers/project'
import departmentsState from 'reducers/departments'
import developersState from 'reducers/developers'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  projectList, editProjectState, departmentsState, developersState, router: routerReducer
});

export default rootReducer
