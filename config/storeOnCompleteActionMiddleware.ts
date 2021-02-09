import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { isPayloadBase, PayloadBase } from '../domain/common/slice';
import { ReduxState } from './store';

export const onCompleteActionMiddleware: Middleware<{}, ReduxState> = (
  store
) => (next) => (action) => {
  let result = next(action);

  console.log(result);

  console.log('middleware geht');
  if (action.payload && isPayloadBase(action.payload)) {
    console.log('action ist von payloadbase');

    const payloadAction = action as PayloadAction<PayloadBase>;

    console.log(payloadAction);

    if (payloadAction.payload.onComplete) {
      console.log('onclomplete existiert');
      payloadAction.payload.onComplete();
    }
  }

  return result;
};
