import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

const name = 'authentication';
export const REGISTER = `${name}/register`;
export const LOGIN = `${name}/login`;
export const LOGOUT = `${name}/logout`;

export type AuthenticationState = {
  isUserLoggedIn: boolean;
  username: string;
  email: string;
  jwtToken: string;
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
      action: PayloadAction<LoginSucceededPayload>
    ) {
      const {
        username,
        email,
        jwtToken,
        refreshToken,
        userId,
      } = action.payload;

      state.errors = [];
      state.username = username;
      state.email = email;
      state.jwtToken = jwtToken;
      state.refreshToken = refreshToken;
      state.userId = userId;
      state.isUserLoggedIn = true;
      state.loading = false;
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
      state.refreshToken = '';
      state.userId = '';
      state.loading = false;
      state.errors = [];
    },
    logoutFailed(state, action: PayloadAction<string[]>) {
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
} = authenticationSlice.actions;

export default authenticationSlice.reducer;

export type LoginSucceededPayload = {
  username: string;
  email: string;
  jwtToken: string;
  refreshToken: string;
  userId: string;
};
