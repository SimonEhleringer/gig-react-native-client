import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import {
  refreshFailedWithNormalError,
  refreshFailedWithAxiosError,
  refreshStarted,
  refreshSucceeded,
  RefreshSucceededPayload,
} from "../domain/authentication/slice";
import { requestRefresh } from "../domain/authentication/saga/requests";
import {
  RefreshJwtPayload,
  RefreshLogoutRequest,
} from "../domain/authentication/saga/shared";
import { getErrorsFromError } from "../domain/common/saga/shared";
import store from "./store";
import { isAxiosResponse } from "../domain/common/saga/shared";

export const addRefreshRequestInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const authState = store.getState().authentication;

      store.dispatch(refreshStarted());

      const { jwtToken, refreshToken } = authState;

      const request: RefreshLogoutRequest = {
        jwtToken,
        refreshToken,
      };

      try {
        const response = await requestRefresh(request);

        const { jwtToken, refreshToken } = response.data;

        const decodedJwt: RefreshJwtPayload = jwtDecode(jwtToken);

        const payload: RefreshSucceededPayload = {
          jwtToken,
          jwtTokenExpiryTime: decodedJwt.exp,
          refreshToken,
        };

        store.dispatch(refreshSucceeded(payload));
      } catch (e) {
        // Don't log user out, if e.g. a network error ist thrown
        if (isAxiosResponse(e)) {
          store.dispatch(refreshFailedWithAxiosError());
        } else {
          store.dispatch(refreshFailedWithNormalError());
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
