import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import {
  LoginRequest,
  RefreshLogoutRequest,
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

export const requestRefresh = async (refreshRequest: RefreshLogoutRequest) => {
  const response: AxiosResponse<AuthenticationResponse> = await api.post(
    'Authentication/Refresh',
    { ...refreshRequest }
  );

  return response;
};

export const requestLogout = async (logoutRequest: RefreshLogoutRequest) => {
  await api.post('Authentication/Logout', { ...logoutRequest });
};
