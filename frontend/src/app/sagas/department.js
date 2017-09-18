import { call, put, takeLatest } from 'redux-saga/effects'
import Department from 'api/departments'

function* _query() {
   try {
      const { data } = yield call(Department.query);
      yield put({type: "GET_DEPARTMENTS_SUCCESS", departments: data });
   } catch (e) {
      yield put({type: "GET_DEPARTMENTS_FAILURE", message: e.message});
   }
}
function* _get(id) {
   try {
      const { data } = yield call(Department.get, id);
      yield put({type: "GET_DEPARTMENT_SUCCESS", department: data});
   } catch (e) {
      yield put({type: "GET_DEPARTMENT_FAILURE", message: e.message});
   }
}
function* _update(action) {
   try {
      const { data } = yield call(Department.update, action.department);
      yield put({type: "UPDATE_DEPARTMENT_SUCCESS", department: action.department });
   } catch (e) {
      yield put({type: "UPDATE_DEPARTMENT_FAILURE", message: e.message});
   }
}

function* _create(action) {
   try {
      const { data } = yield call(Department.create, action.department);
      yield put({type: "CREATE_DEPARTMENT_SUCCESS", department: action.department });
   } catch (e) {
      yield put({type: "CREATE_DEPARTMENT_FAILURE", message: e.message});
   }
}

function* departmentSaga() {
  yield takeLatest("GET_DEPARTMENT_REQUEST"    , _get);
  yield takeLatest("GET_DEPARTMENTS_REQUEST"    , _query);
  yield takeLatest("CREATE_DEPARTMENT_REQUEST" , _create);
  yield takeLatest("UPDATE_DEPARTMENT_REQUEST" , _update);
}
export default departmentSaga;
