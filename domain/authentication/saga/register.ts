import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ErrorResponse } from '../../common/saga';
import {
  loginRegisterFailed,
  loginRegisterStarted,
  loginRegisterSucceeded,
  REGISTER,
  RegisterPayload,
} from '../authenticationSlice';
import { requestRegister } from './requests';
import {
  AuthenticationResponse,
  getLoginRegisterSucceededPayload,
  RegisterRequest,
} from './shared';

export function* watchRegister() {
  yield takeLatest(REGISTER, handleRegister);
}

function* handleRegister(action: PayloadAction<RegisterPayload>) {
  yield put(loginRegisterStarted());

  const { username, email, password, confirmedPassword } = action.payload;

  if (password !== confirmedPassword) {
    yield put(loginRegisterFailed(['Passwörter stimmen nicht überein.']));
    return;
  }

  const registerRequest: RegisterRequest = {
    username,
    email,
    password,
  };

  try {
    const response: AxiosResponse<AuthenticationResponse> = yield call(
      requestRegister,
      registerRequest
    );

    const { jwtToken, refreshToken } = response.data;

    const payload = getLoginRegisterSucceededPayload(jwtToken, refreshToken);

    yield put(loginRegisterSucceeded(payload));
  } catch (e) {
    e = e as AxiosError<ErrorResponse>;
    if (e.response) {
      yield put(loginRegisterFailed(e.response.data.errors));
    }
  }
}
