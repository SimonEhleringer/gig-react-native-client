import { put, takeLatest } from 'redux-saga/effects';
import { REGISTER } from './authenticationSlice';

export function* watchRegister() {
  yield takeLatest(REGISTER, handleRegister);
}

function* handleRegister() {
  // yield put()
}
