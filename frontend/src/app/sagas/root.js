import { all } from 'redux-saga/effects';
import invoiceSaga from 'sagas/invoices'
import departmentSaga from 'sagas/department';
import developerSaga from 'sagas/developer';
import projectSaga from 'sagas/project';

export default function* rootSaga() {
   yield all([
     invoiceSaga(),
     departmentSaga(),
     developerSaga(),
     projectSaga()
   ])
}
