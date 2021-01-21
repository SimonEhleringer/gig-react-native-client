import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

const name = "authentication";
export const REGISTER = `${name}/register`;
export const LOGIN = `${name}/login`;

type AuthenticationState = {
  isUserLoggedIn: boolean;
  username: string;
  email: string;
  jwtToken: string;
  userId: string;
  loading: boolean;
  errors: string[];
};

const initialState: AuthenticationState = {
  isUserLoggedIn: false,
  username: "",
  email: "",
  jwtToken: "",
  userId: "",
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

const authenticationSlice = createSlice({
  name,
  initialState,
  reducers: {
    loginRegisterStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    loginRegisterSucceeded(
      state,
      action: PayloadAction<LoginSucceededPayload>
    ) {
      const { username, email, jwtToken, userId } = action.payload;

      state.errors = [];
      state.username = username;
      state.email = email;
      state.jwtToken = jwtToken;
      state.userId = userId;
      state.isUserLoggedIn = true;
      state.loading = false;
    },
    loginRegisterFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginRegisterStarted,
  loginRegisterSucceeded,
  loginRegisterFailed,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;

export type LoginSucceededPayload = {
  username: string;
  email: string;
  jwtToken: string;
  userId: string;
};
