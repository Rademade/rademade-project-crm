import { call, put, takeLatest } from 'redux-saga/effects'
import Developer               from 'api/developers'
import navigation                from 'actions/navigation'
function* _query() {
   try {
      const { data } = yield call(Developer.query);
      yield put({type: "GET_DEVELOPERS_SUCCESS", developers: data });
   } catch (e) {
      yield put({type: "GET_DEVELOPERS_FAILURE", message: e.message});
   }
}
function* _get(id) {
   try {
      const { data } = yield call(Developer.get, id);
      yield put({type: "GET_DEVELOPER_SUCCESS", developer: data});
   } catch (e) {
      yield put({type: "GET_DEVELOPER_FAILURE", message: e.message});
   }
}
function* _update(action) {
   try {
      const { data } = yield call(Developer.update, action.developer);
      yield put(navigation.toDevelopers());
      yield put({type: "UPDATE_DEVELOPER_SUCCESS", developer: action.developer });
   } catch (e) {
      yield put({type: "UPDATE_DEVELOPER_FAILURE", message: e.message});
   }
}

function* _create(action) {
   try {
      const { data } = yield call(Developer.create, action.developer);
      console.log(data)
      yield put({type: "CREATE_DEVELOPER_SUCCESS", developer: data });
      yield put(navigation.toDevelopers());
   } catch (e) {
      yield put({type: "CREATE_DEVELOPER_FAILURE", message: e.message});
   }
}
function* _delete(action) {
   try {
      const { data } = yield call(Developer.delete, action.developerId);
      yield put({type: "DELETE_DEVELOPER_SUCCESS", developerId: action.developerId });
   } catch (e) {
      yield put({type: "DELETE_DEVELOPER_FAILURE", message: e.message});
   }
}

function* developerSaga() {
  yield takeLatest("GET_DEVELOPER_REQUEST"    ,  _get);
  yield takeLatest("GET_DEVELOPERS_REQUEST"   ,  _query);
  yield takeLatest("CREATE_DEVELOPER_REQUEST" ,  _create);
  yield takeLatest("UPDATE_DEVELOPER_REQUEST" ,  _update);
  yield takeLatest("DELETE_DEVELOPER_REQUEST" ,  _delete);
}
export default developerSaga;
