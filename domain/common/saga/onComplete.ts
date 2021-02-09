import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { isPayloadBase, PayloadBase } from '../slice';

export function* watchOnCompleteSaga() {
  yield takeEvery('*', handleCompleteSaga);
}

function* handleCompleteSaga(action: any) {
  if (action.payload && isPayloadBase(action.payload)) {
    console.log('action ist von payloadbase');

    const payloadAction = action as PayloadAction<PayloadBase>;

    console.log(payloadAction);

    if (payloadAction.payload.onComplete) {
      console.log('onclomplete existiert');
      payloadAction.payload.onComplete();
    }
  }
  yield;
}
