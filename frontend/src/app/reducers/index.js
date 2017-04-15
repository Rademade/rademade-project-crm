import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import project     from 'reducers/project'
import departmentsState     from 'reducers/departments'


const rootReducer = combineReducers({
  projectList, project, departmentsState
});

export default rootReducer
