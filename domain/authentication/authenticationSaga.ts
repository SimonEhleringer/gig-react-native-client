import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, call } from 'redux-saga/effects';
import api from '../../config/api';
import {
  REGISTER,
  LOGIN,
  LoginPayload,
  loginRegisterStarted,
  loginRegisterFailed,
  loginRegisterSucceeded,
  LoginSucceededPayload as LoginRegisterSucceededPayload,
  RegisterPayload,
} from './authenticationSlice';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AxiosResponse, AxiosError } from 'axios';
import apiClient from '../../config/apiClient';

export function* watchLogin() {
  yield takeLatest(LOGIN, handleLogin);
}

export function* watchRegister() {
  yield takeLatest(REGISTER, handleRegister);
}

interface LoginRegisterResponse {
  errors: string[];
  jwtToken: string;
  succeeded: boolean;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginRegisterJwtPayload extends JwtPayload {
  email: string;
  id: string;
  sub: string;
}

interface ErrorResponse {
  errors: string[];
}

function* handleLogin(action: PayloadAction<LoginPayload>) {
  yield put(loginRegisterStarted());

  const { email, password } = action.payload;

  const loginRequest: LoginRequest = {
    email,
    password,
  };

  try {
    const response: AxiosResponse<LoginRegisterResponse> = yield call(
      requestLogin,
      loginRequest
    );

    const { succeeded, jwtToken, errors } = response.data;

    if (succeeded) {
      const payload = getLoginRegisterSucceededPayload(jwtToken);

      yield put(loginRegisterSucceeded(payload));
    } else {
      yield put(loginRegisterFailed(errors));
    }
  } catch (e) {
    e = e as AxiosError<ErrorResponse>;
    if (e.response) {
      yield put(loginRegisterFailed(e.response.data.errors));
    }
    //yield put(loginRegisterFailed([(e as Error).message]));
    //yield put(loginRegisterFailed((e.response.data as ErrorResponse).errors));
  }
}

const requestLogin = async (loginRequest: LoginRequest) => {
  const response: AxiosResponse<LoginRegisterResponse> = await api.post(
    '/Authentication/Login',
    {
      ...loginRequest,
    }
  );

  return response;
};

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
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
    const response: AxiosResponse<LoginRegisterResponse> = yield call(
      requestRegister,
      registerRequest
    );

    const { succeeded, jwtToken, errors } = response.data;

    if (succeeded) {
      const payload = getLoginRegisterSucceededPayload(jwtToken);

      yield put(loginRegisterSucceeded(payload));
    } else {
      yield put(loginRegisterFailed(errors));
    }
  } catch (e) {
    e = e as AxiosError<ErrorResponse>;
    if (e.response) {
      yield put(loginRegisterFailed(e.response.data.errors));
    }
  }
}

const requestRegister = async (registerRequest: RegisterRequest) => {
  const response: AxiosResponse<LoginRegisterResponse> = await api.post(
    '/Authentication/Register',
    { ...registerRequest }
  );

  return response;
};

const getLoginRegisterSucceededPayload = (jwtToken: string) => {
  const decodedJwt = jwtDecode<LoginRegisterJwtPayload>(jwtToken);

  const { sub, email, id } = decodedJwt;

  const payload: LoginRegisterSucceededPayload = {
    email,
    jwtToken,
    userId: id,
    username: sub,
  };

  return payload;
};
