import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, call } from 'redux-saga/effects';
import api from '../../config/api';
import {
  REGISTER,
  LOGIN,
  LoginPayload,
  loginStarted,
  loginFailed,
  loginSucceeded,
  LoginSucceededPayload,
} from './authenticationSlice';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AxiosResponse } from 'axios';
import apiClient from '../../config/apiClient';

export function* watchRegister() {
  yield takeLatest(REGISTER, handleRegister);
}

function* handleRegister() {
  // yield put()
}

export function* watchLogin() {
  yield takeLatest(LOGIN, handleLogin);
}

interface LoginResponse {
  errors: string[];
  jwtToken: string;
  succeeded: boolean;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginJwtPayload extends JwtPayload {
  email: string;
  id: string;
  sub: string;
}

function* handleLogin(action: PayloadAction<LoginPayload>) {
  yield put(loginStarted());

  const { email, password } = action.payload;

  const loginRequest: LoginRequest = {
    email,
    password,
  };

  try {
    const response: AxiosResponse<LoginResponse> = yield call(
      requestLogin,
      loginRequest
    );

    const { succeeded, jwtToken, errors } = response.data;

    if (succeeded) {
      const decodedJwt = jwtDecode<LoginJwtPayload>(jwtToken);

      const { sub, email, id } = decodedJwt;

      const payload: LoginSucceededPayload = {
        username: sub,
        email: email,
        jwtToken: jwtToken,
        userId: id,
      };

      yield put(loginSucceeded(payload));
    } else {
      yield put(loginFailed(response.data.errors));
    }
  } catch (e) {
    yield put(loginFailed([(e as Error).message]));
  }
}

const requestLogin = async (loginRequest: LoginRequest) => {
  const response: AxiosResponse<LoginResponse> = await api.post(
    '/Authentication/Login',
    {
      ...loginRequest,
    }
  );

  return response;
};
