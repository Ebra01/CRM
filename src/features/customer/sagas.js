// src/features/customer/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCustomersRequest, fetchCustomersSuccess, fetchCustomersFailure } from './reducers';
import { fetchCustomersApi } from './services';

function* fetchCustomersSaga() {
  try {
    const customers = yield call(fetchCustomersApi);
    yield put(fetchCustomersSuccess(customers));
  } catch (error) {
    yield put(fetchCustomersFailure(error.toString()));
  }
}

export default function* customerSaga() {
  yield takeLatest(fetchCustomersRequest.type, fetchCustomersSaga);
}
