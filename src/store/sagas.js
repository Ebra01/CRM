// src/store/sagas.js
import { all } from 'redux-saga/effects';
import customerSaga from '../features/customer/sagas';

export default function* rootSaga() {
  yield all([customerSaga()]);
}
