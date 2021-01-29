import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import {
  LoginRequest,
  LogoutRequest,
  AuthenticationResponse,
  RegisterRequest,
} from './shared';

export const requestLogin = async (loginRequest: LoginRequest) => {
  const response: AxiosResponse<AuthenticationResponse> = await api.post(
    '/Authentication/Login',
    {
      ...loginRequest,
    }
  );

  return response;
};

export const requestRegister = async (registerRequest: RegisterRequest) => {
  const response: AxiosResponse<AuthenticationResponse> = await api.post(
    '/Authentication/Register',
    { ...registerRequest }
  );

  return response;
};

export const requestLogout = async (logoutRequest: LogoutRequest) => {
  await api.post('Authentication/Logout', { ...logoutRequest });
};
