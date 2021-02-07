import { AxiosInstance, AxiosRequestConfig } from 'axios';
import store from './store';

export const addJwtTokenInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const state = store.getState().authentication;
    const jwtToken = state.jwtToken;

    config.headers.Authorization = `bearer ${jwtToken}`;

    return config;
  });
};
