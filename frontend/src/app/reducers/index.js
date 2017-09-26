import { combineReducers }                         from  'redux';
import projectList                                 from  'reducers/projects';
import project                                     from  'reducers/project';
import departmentsState                            from  'reducers/departments';
import developer                                   from  'reducers/developer';
import department                                  from  'reducers/department';
import developersState                             from  'reducers/developers';
import sprintList                                  from  'reducers/sprints';
import sprintState                                 from  'reducers/sprint';
import { combineForms, createForms, modelReducer } from  'react-redux-form';
import { routerReducer }                           from  'react-router-redux';
import { reducer as formReducer }                  from  'redux-form'
const rootReducer = combineReducers({
  projectList,
  project,
  departmentsState,
  developersState,
  sprintList,
  sprintState,
  department,
  developer,
  router: routerReducer,
  form: formReducer, 
  forms: combineForms(
    { department: {}, },
    'forms'
  )
});

export default rootReducer
