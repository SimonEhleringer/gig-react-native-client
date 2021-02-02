import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const name = 'authentication';
export const REGISTER = `${name}/register`;
export const LOGIN = `${name}/login`;
export const REFRESH = `${name}/refresh`;
export const LOGOUT = `${name}/logout`;

export type AuthenticationState = {
  isUserLoggedIn: boolean;
  username: string;
  email: string;
  jwtToken: string;
  jwtTokenExpiryTime: number;
  refreshToken: string;
  userId: string;
  loading: boolean;
  errors: string[];
};

const initialState: AuthenticationState = {
  isUserLoggedIn: false,
  username: '',
  email: '',
  jwtToken: '',
  jwtTokenExpiryTime: 0,
  refreshToken: '',
  userId: '',
  loading: false,
  errors: [],
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export const register = createAction<RegisterPayload>(REGISTER);

export type LoginPayload = {
  email: string;
  password: string;
};

export const login = createAction<LoginPayload>(LOGIN);

export const refresh = createAction(REFRESH);

export const logout = createAction(LOGOUT);

const authenticationSlice = createSlice({
  name,
  initialState,
  reducers: {
    // Login and Register
    loginRegisterStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    loginRegisterSucceeded(
      state,
      action: PayloadAction<LoginRegisterSucceededPayload>
    ) {
      const {
        username,
        email,
        jwtToken,
        jwtTokenExpiryTime,
        refreshToken,
        userId,
      } = action.payload;

      state.errors = [];
      state.username = username;
      state.email = email;
      state.jwtToken = jwtToken;
      state.jwtTokenExpiryTime = jwtTokenExpiryTime;
      state.refreshToken = refreshToken;
      state.userId = userId;
      state.isUserLoggedIn = true;
      state.loading = false;

      console.log(state);
    },
    loginRegisterFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
    // Logout
    logoutStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    logoutSucceeded(state) {
      state.isUserLoggedIn = false;
      state.username = '';
      state.email = '';
      state.jwtToken = '';
      state.jwtTokenExpiryTime = 0;
      state.refreshToken = '';
      state.userId = '';
      state.loading = false;
      state.errors = [];
    },
    logoutFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
    refreshStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    refreshSucceeded(state, action: PayloadAction<RefreshSucceededPayload>) {
      const { jwtToken, jwtTokenExpiryTime, refreshToken } = action.payload;

      state.jwtToken = jwtToken;
      state.jwtTokenExpiryTime = jwtTokenExpiryTime;
      state.refreshToken = refreshToken;
    },
    refreshFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginRegisterStarted,
  loginRegisterSucceeded,
  loginRegisterFailed,
  logoutStarted,
  logoutSucceeded,
  logoutFailed,
  refreshStarted,
  refreshSucceeded,
  refreshFailed,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;

export type LoginRegisterSucceededPayload = {
  username: string;
  email: string;
  jwtToken: string;
  jwtTokenExpiryTime: number;
  refreshToken: string;
  userId: string;
};

export type RefreshSucceededPayload = {
  jwtToken: string;
  jwtTokenExpiryTime: number;
  refreshToken: string;
};
