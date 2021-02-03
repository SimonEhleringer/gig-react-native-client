import { AxiosInstance, AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import {
  refreshFailed,
  refreshStarted,
  refreshSucceeded,
  RefreshSucceededPayload,
} from '../domain/authentication/authenticationSlice';
import { requestRefresh } from '../domain/authentication/saga/requests';
import {
  RefreshJwtPayload,
  RefreshLogoutRequest,
} from '../domain/authentication/saga/shared';
import { getErrorsFromError } from '../domain/common/saga';
import store from './store';

export const addRefreshRequestInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const authState = store.getState().authentication;
      const { jwtTokenExpiryTime } = authState;

      // Don't check for Authentication endpoints, because they don't need a Jwt
      if (config.url?.includes('Authentication')) {
        return config;
      }

      // If Jwt is expired -> Refresh Jwt
      if (jwtTokenExpiryTime < Date.now().valueOf() / 1000) {
        store.dispatch(refreshStarted());

        const { jwtToken, refreshToken } = authState;

        const request: RefreshLogoutRequest = {
          jwtToken,
          refreshToken,
        };

        requestRefresh(request)
          .then((result) => {
            const { jwtToken, refreshToken } = result.data;

            const decodedJwt: RefreshJwtPayload = jwtDecode(jwtToken);

            const payload: RefreshSucceededPayload = {
              jwtToken,
              jwtTokenExpiryTime: decodedJwt.exp,
              refreshToken,
            };

            store.dispatch(refreshSucceeded(payload));
          })
          .catch((e) => {
            store.dispatch(refreshFailed(getErrorsFromError(e)));
          });
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
