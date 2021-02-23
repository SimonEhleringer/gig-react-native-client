import { AxiosInstance, AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import {
  refreshFailed,
  refreshStarted,
  refreshSucceeded,
  RefreshSucceededPayload,
} from '../domain/authentication/slice';
import { requestRefresh } from '../domain/authentication/saga/requests';
import {
  RefreshJwtPayload,
  RefreshLogoutRequest,
} from '../domain/authentication/saga/shared';
import { getErrorsFromError } from '../domain/common/saga/shared';
import store from './store';

export const addRefreshRequestInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const authState = store.getState().authentication;
      //const { jwtTokenExpiryTime } = authState;

      // console.log(
      //   'Jwt abgelaufen: ' + (jwtTokenExpiryTime < Date.now() / 1000)
      // );

      // console.log(jwtTokenExpiryTime);
      // console.log(Date.now() / 1000);

      // console.log((Date.now() / 1000 - jwtTokenExpiryTime) / 60);

      // If Jwt is expired -> Refresh Jwt
      // if (jwtTokenExpiryTime < Date.now() / 1000) {
      store.dispatch(refreshStarted());

      const { jwtToken, refreshToken } = authState;

      const request: RefreshLogoutRequest = {
        jwtToken,
        refreshToken,
      };

      console.log(request);

      requestRefresh(request)
        .then((result) => {
          const { jwtToken, refreshToken } = result.data;

          const decodedJwt: RefreshJwtPayload = jwtDecode(jwtToken);

          console.log('decodedJwt: ' + decodedJwt);

          const payload: RefreshSucceededPayload = {
            jwtToken,
            jwtTokenExpiryTime: decodedJwt.exp,
            refreshToken,
          };

          store.dispatch(refreshSucceeded(payload));
        })
        .catch((e) => {
          console.log('Errors beim Refreshen:');
          console.log(getErrorsFromError(e));

          store.dispatch(refreshFailed());
        });
      // }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
