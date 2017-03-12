import { combineReducers } from 'redux'
import projectList from 'reducers/projects'
import project     from 'reducers/project'

const rootReducer = combineReducers({
  projectList, project
});

export default rootReducer
