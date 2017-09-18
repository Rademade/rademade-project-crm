import { all } from 'redux-saga/effects';
import invoiceSaga from 'sagas/invoices'
import departmentSaga from 'sagas/department';
import developerSaga from 'sagas/developer';
export default function* rootSaga() {
   yield all([
     invoiceSaga(),
     departmentSaga(),
     developerSaga()
   ])
}
