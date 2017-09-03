import { all } from 'redux-saga';
import invoiceSaga from 'sagas/invoices'
export default function* rootSaga() {
   yield all([
     invoiceSaga()
   ])
}
