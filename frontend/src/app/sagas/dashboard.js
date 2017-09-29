import { call, put, takeLatest } from  'redux-saga/effects'
import Dashboard                 from  'api/dashboard'
import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_DEVELOPERS_REQUEST,
  GET_DASHBOARD_DEVELOPERS_SUCCESS,
  GET_DASHBOARD_DEVELOPERS_FAILURE
} from 'constants/action_types/dashboard'

function* _get() {
   try {
      const { data } = yield call(Dashboard.get);
      yield put({type: GET_DASHBOARD_SUCCESS, dashboard: data});
   } catch (e) {
      yield put({type: GET_DASHBOARD_FAILURE, message: e.message});
   }
}
function* _getDevelopers(action) {
   try {
      const { data } = yield call(Dashboard.getDevelopers, action.month);
      yield put(navigation.toProjects());
      yield put({type: GET_DASHBOARD_DEVELOPERS_SUCCESS, developers: data });
   } catch (e) {
      yield put({type: GET_DASHBOARD_DEVELOPERS_FAILURE, message: e.message});
   }
}

function* dashboardSaga() {
  yield takeLatest(GET_DASHBOARD_REQUEST    ,  _get);
  yield takeLatest(GET_DASHBOARD_DEVELOPERS_REQUEST   , _getDevelopers);
}
export default dashboardSaga;
