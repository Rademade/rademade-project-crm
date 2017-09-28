import { call, put, takeLatest } from 'redux-saga/effects'
import Department from 'api/departments'
import {
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAILURE,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAILURE,
  CREATE_DEPARTMENT_REQUEST,
  CREATE_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE
} from 'constants/action_types/departments'


function* _query() {
   try {
      const { data } = yield call(Department.query);
      yield put({type: GET_DEPARTMENTS_SUCCESS, departments: data });
   } catch (e) {
      yield put({type: GET_DEPARTMENTS_FAILURE, message: e.message});
   }
}
function* _get(id) {
   try {
      const { data } = yield call(Department.get, id);
      yield put({type: GET_DEPARTMENT_SUCCESS, department: data});
   } catch (e) {
      yield put({type: GET_DEPARTMENT_FAILURE, message: e.message});
   }
}
function* _update(action) {
   try {
      const { data } = yield call(Department.update, action.department);
      yield put({type: UPDATE_DEPARTMENT_SUCCESS, department: action.department });
   } catch (e) {
      yield put({type: UPDATE_DEPARTMENT_FAILURE, message: e.message});
   }
}

function* _create(action) {
   try {
      const { data } = yield call(Department.create, action.department);
      yield put({type: CREATE_DEPARTMENT_SUCCESS, department: data });
   } catch (e) {
      yield put({type: CREATE_DEPARTMENT_FAILURE, message: e.message});
   }
}
function* _delete(action) {
   try {
      const { data } = yield call(Department.delete, action.id);
      yield put({type: DELETE_DEPARTMENT_SUCCESS, id: action.id });
   } catch (e) {
      yield put({type: DELETE_DEPARTMENT_FAILURE, message: e.message});
   }
}

function* departmentSaga() {
  yield takeLatest(GET_DEPARTMENT_REQUEST    , _get);
  yield takeLatest(GET_DEPARTMENTS_REQUEST    , _query);
  yield takeLatest(CREATE_DEPARTMENT_REQUEST , _create);
  yield takeLatest(UPDATE_DEPARTMENT_REQUEST , _update);
  yield takeLatest(DELETE_DEPARTMENT_REQUEST , _delete);
}
export default departmentSaga;
