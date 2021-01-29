import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import api from '../../config/api';
import {
  REGISTER,
  LOGIN,
  AuthenticationState,
  LoginPayload,
  loginRegisterStarted,
  loginRegisterFailed,
  loginRegisterSucceeded,
  logoutStarted,
  logoutSucceeded,
  logoutFailed,
  LoginRegisterSucceededPayload as LoginRegisterSucceededPayload,
  RegisterPayload,
  LOGOUT,
} from './authenticationSlice';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AxiosResponse, AxiosError } from 'axios';
import apiClient from '../../config/apiClient';
import { ReduxState } from '../../config/store';

// export function* watchLogin() {
//   yield takeLatest(LOGIN, handleLogin);
// }

// export function* watchRegister() {
//   yield takeLatest(REGISTER, handleRegister);
// }

// export function* watchLogout() {
//   yield takeLatest(LOGOUT, handleLogout);
// }

// function* handleLogin(action: PayloadAction<LoginPayload>) {
//   yield put(loginRegisterStarted());

//   const { email, password } = action.payload;

//   const loginRequest: LoginRequest = {
//     email,
//     password,
//   };

//   try {
//     const response: AxiosResponse<AuthenticationResponse> = yield call(
//       requestLogin,
//       loginRequest
//     );

//     const { jwtToken, refreshToken } = response.data;

//     const payload = getLoginRegisterSucceededPayload(jwtToken, refreshToken);

//     yield put(loginRegisterSucceeded(payload));
//   } catch (e) {
//     e = e as AxiosError<ErrorResponse>;
//     if (e.response) {
//       yield put(loginRegisterFailed(e.response.data.errors));
//     }
//     //yield put(loginRegisterFailed([(e as Error).message]));
//     //yield put(loginRegisterFailed((e.response.data as ErrorResponse).errors));
//   }
// }

// const requestLogin = async (loginRequest: LoginRequest) => {
//   const response: AxiosResponse<AuthenticationResponse> = await api.post(
//     '/Authentication/Login',
//     {
//       ...loginRequest,
//     }
//   );

//   return response;
// };

// interface RegisterRequest {
//   username: string;
//   email: string;
//   password: string;
// }

// function* handleRegister(action: PayloadAction<RegisterPayload>) {
//   yield put(loginRegisterStarted());

//   const { username, email, password, confirmedPassword } = action.payload;

//   if (password !== confirmedPassword) {
//     yield put(loginRegisterFailed(['Passwörter stimmen nicht überein.']));
//     return;
//   }

//   const registerRequest: RegisterRequest = {
//     username,
//     email,
//     password,
//   };

//   try {
//     const response: AxiosResponse<AuthenticationResponse> = yield call(
//       requestRegister,
//       registerRequest
//     );

//     const { jwtToken, refreshToken } = response.data;

//     const payload = getLoginRegisterSucceededPayload(jwtToken, refreshToken);

//     yield put(loginRegisterSucceeded(payload));
//   } catch (e) {
//     e = e as AxiosError<ErrorResponse>;
//     if (e.response) {
//       yield put(loginRegisterFailed(e.response.data.errors));
//     }
//   }
// }

// const requestRegister = async (registerRequest: RegisterRequest) => {
//   const response: AxiosResponse<AuthenticationResponse> = await api.post(
//     '/Authentication/Register',
//     { ...registerRequest }
//   );

//   return response;
// };

// function* handleLogout() {
//   yield put(logoutStarted());

//   try {
//     const state: AuthenticationState = yield select(
//       (state: ReduxState) => state.authentication
//     );

//     const refreshToken = state.refreshToken;
//     const jwtToken = state.jwtToken;

//     const logoutRequest: LogoutRequest = {
//       jwtToken,
//       refreshToken,
//     };

//     yield call(requestLogout, logoutRequest);

//     yield put(logoutSucceeded());
//   } catch (e) {
//     e = e as AxiosError<ErrorResponse>;
//     if (e.response) {
//       yield put(logoutFailed(e.response.data.errors));
//     }
//   }
// }

// const requestLogout = async (logoutRequest: LogoutRequest) => {
//   await api.post('Authentication/Logout', { ...logoutRequest });
// };

// const getLoginRegisterSucceededPayload = (
//   jwtToken: string,
//   refreshToken: string
// ) => {
//   const decodedJwt = jwtDecode<LoginRegisterJwtPayload>(jwtToken);

//   const { sub, email, id } = decodedJwt;

//   const payload: LoginRegisterSucceededPayload = {
//     email,
//     jwtToken,
//     refreshToken,
//     userId: id,
//     username: sub,
//   };

//   return payload;
// };

// interface AuthenticationResponse {
//   jwtToken: string;
//   refreshToken: string;
// }

// interface LoginRequest {
//   email: string;
//   password: string;
// }

// interface LoginRegisterJwtPayload extends JwtPayload {
//   email: string;
//   id: string;
//   sub: string;
// }

// interface ErrorResponse {
//   errors: string[];
// }

// interface LogoutRequest {
//   jwtToken: string;
//   refreshToken: string;
// }
