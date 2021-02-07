import jwtDecode, { JwtPayload } from 'jwt-decode';
import { LoginRegisterSucceededPayload } from '../slice';

export const getLoginRegisterSucceededPayload = (
  jwtToken: string,
  refreshToken: string
) => {
  const decodedJwt = jwtDecode<LoginRegisterJwtPayload>(jwtToken);

  const { sub, email, exp, id } = decodedJwt;

  const payload: LoginRegisterSucceededPayload = {
    email,
    jwtToken,
    jwtTokenExpiryTime: exp,
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

export interface RefreshLogoutRequest {
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
  exp: number;
  id: string;
  sub: string;
}

export interface RefreshJwtPayload extends JwtPayload {
  exp: number;
}
