import { AuthenticationState } from '../domain/authentication/authenticationSlice';

export const refreshJwtTokenMiddleware = (store: any) => (next: any) => (
  action: any
) => {
  const state: AuthenticationState = store.getState().authentication;
  const jwtTokenExpiryTime = state.jwtTokenExpiryTime;

  // If Jwt is expired
  if (jwtTokenExpiryTime < Date.now().valueOf() / 1000) {
  }

  next(action);
};
