import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import project     from 'reducers/project'
import departmentsState from 'reducers/departments'
import developersState from 'reducers/developers'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  projectList, project, departmentsState, developersState, router: routerReducer
});

export default rootReducer
