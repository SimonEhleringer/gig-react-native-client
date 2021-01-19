import { createSlice, createAction } from '@reduxjs/toolkit';

const name = 'authentication';
export const REGISTER = `${name}/register`;

type AuthenticationState = {};

const initialState: AuthenticationState = {};

export const register = createAction(REGISTER);

const authenticationSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export default authenticationSlice.reducer;
