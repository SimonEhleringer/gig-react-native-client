import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { ErrorResponse, getErrorsFromError } from '../../common/saga/shared';
import {
  LOGIN,
  LoginPayload,
  loginRegisterFailed,
  loginRegisterStarted,
  loginRegisterSucceeded,
} from '../slice';
import { requestLogin } from './requests';
import {
  AuthenticationResponse,
  getLoginRegisterSucceededPayload,
  LoginRequest,
} from './shared';

export function* watchLogin() {
  yield takeLatest(LOGIN, handleLogin);
}

function* handleLogin(action: PayloadAction<LoginPayload>) {
  yield put(loginRegisterStarted());

  const { email, password } = action.payload;

  const loginRequest: LoginRequest = {
    email,
    password,
  };

  try {
    const response: AxiosResponse<AuthenticationResponse> = yield call(
      requestLogin,
      loginRequest
    );

    const { jwtToken, refreshToken } = response.data;

    console.log(refreshToken);

    const payload = getLoginRegisterSucceededPayload(jwtToken, refreshToken);

    yield put(loginRegisterSucceeded(payload));
  } catch (e) {
    yield put(loginRegisterFailed(getErrorsFromError(e)));
  }
}
