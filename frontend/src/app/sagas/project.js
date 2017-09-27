import { call, put, takeLatest } from  'redux-saga/effects'
import project                   from  'api/projects'
import navigation                from  'actions/navigation'
import {
  GET_PROJECTS_REQUEST             ,
  GET_PROJECTS_SUCCESS             ,
  GET_PROJECTS_FAILURE             ,
  GET_PROJECT_REQUEST              ,
  GET_PROJECT_SUCCESS              ,
  GET_PROJECT_FAILURE              ,
  CREATE_PROJECT_REQUEST           ,
  CREATE_PROJECT_SUCCESS           ,
  CREATE_PROJECT_FAILURE           ,
  UPDATE_PROJECT_REQUEST           ,
  UPDATE_PROJECT_SUCCESS           ,
  UPDATE_PROJECT_FAILURE           ,
  DELETE_PROJECT_REQUEST           ,
  DELETE_PROJECT_SUCCESS           ,
  DELETE_PROJECT_FAILURE           ,
  JIRA_SYNCHRONIZE_PROJECT_REQUEST
} from 'constants/action_types/projects'

const serializeProject = (project) => {
  return {
    ...project,
    members: undefined,
    projectMembersAttributes: project.members
  }
}
function* _query() {
   try {
      const { data } = yield call(project.query);
      yield put({type: GET_PROJECTS_SUCCESS, projects: data });
   } catch (e) {
      yield put({type: GET_PROJECTS_FAILURE, message: e.message});
   }
}
function* _get(id) {
   try {
      const { data } = yield call(project.get, id);
      yield put({type: GET_PROJECT_SUCCESS, project: data});
   } catch (e) {
      yield put({type: GET_PROJECT_FAILURE, message: e.message});
   }
}
function* _update(action) {
   try {
      const { data } = yield call(project.update, serializeProject(action.project));
      yield put(navigation.toProjects());
      yield put({type: UPDATE_PROJECT_SUCCESS, project: action.project });
   } catch (e) {
      yield put({type: UPDATE_PROJECT_FAILURE, message: e.message});
   }
}
function* _jiraSync(action) {
   try {
      const { data } = yield call(project.jiraSync, action.id);
      yield put({type: UPDATE_PROJECT_SUCCESS, project: action.project });
   } catch (e) {
      yield put({type: UPDATE_PROJECT_FAILURE, message: e.message});
   }
}

function* _create(action) {
   try {
      const { data } = yield call(project.create, serializeProject(action.project));
      yield put({type: CREATE_PROJECT_SUCCESS, project: data });
      yield put(navigation.toProjects());
   } catch (e) {
      yield put({type: CREATE_PROJECT_FAILURE, message: e.message});
   }
}
function* _delete(action) {
   try {
      const { data } = yield call(project.delete, action.id);
      yield put({type: DELETE_PROJECT_SUCCESS, projectId: action.projectId });
   } catch (e) {
      yield put({type: DELETE_PROJECT_FAILURE, message: e.message});
   }
}

function* projectSaga() {
  yield takeLatest(GET_PROJECT_REQUEST    ,  _get);
  yield takeLatest(GET_PROJECTS_REQUEST   ,  _query);
  yield takeLatest(CREATE_PROJECT_REQUEST ,  _create);
  yield takeLatest(UPDATE_PROJECT_REQUEST ,  _update);
  yield takeLatest(DELETE_PROJECT_REQUEST ,  _delete);
  yield takeLatest(JIRA_SYNCHRONIZE_PROJECT_REQUEST ,  _jiraSync);
}
export default projectSaga;
