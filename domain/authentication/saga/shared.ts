import jwtDecode, { JwtPayload } from 'jwt-decode';
import { LoginRegisterSucceededPayload } from '../authenticationSlice';

export const getLoginRegisterSucceededPayload = (
  jwtToken: string,
  refreshToken: string
) => {
  const decodedJwt = jwtDecode<LoginRegisterJwtPayload>(jwtToken);

  const { sub, email, id } = decodedJwt;

  const payload: LoginRegisterSucceededPayload = {
    email,
    jwtToken,
    refreshToken,
    userId: id,
    username: sub,
  };

  return payload;
};

// Requests
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LogoutRequest {
  jwtToken: string;
  refreshToken: string;
}

// Responses
export interface AuthenticationResponse {
  jwtToken: string;
  refreshToken: string;
}

export interface LoginRegisterJwtPayload extends JwtPayload {
  email: string;
  id: string;
  sub: string;
}
