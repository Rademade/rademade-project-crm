import { call, put, takeLatest } from 'redux-saga/effects'
import Invoice from 'api/invoices'

function* getInvoicePdf() {
   try {
      const { data } = yield call(Invoice.get, '');
      yield put({type: "GET_INVOICES_SUCCESS", langs: data});
   } catch (e) {
      yield put({type: "GET_INVOICES_FAILURE", message: e.message});
   }
}

function* invoiceSaga() {
  yield takeLatest("GET_INVOICES_REQUEST", getInvoicePdf);
}
export default invoiceSaga;
