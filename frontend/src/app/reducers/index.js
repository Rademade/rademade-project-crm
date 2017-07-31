import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import editProjectState     from 'reducers/project'
import departmentsState from 'reducers/departments'
import developersState from 'reducers/developers'
import sprintList from 'reducers/sprints'
import sprintState from 'reducers/sprint'

import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  projectList, editProjectState, departmentsState, developersState, sprintList, router: routerReducer, sprintState
});

export default rootReducer
