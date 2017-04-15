import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import project     from 'reducers/project'
import departmentsState from 'reducers/departments'
import developersState from 'reducers/developers'



const rootReducer = combineReducers({
  projectList, project, departmentsState, developersState
});

export default rootReducer
