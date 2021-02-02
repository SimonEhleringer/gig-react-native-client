import { AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga';
import {
  REFRESH,
  refreshStarted,
  refreshSucceeded,
  refreshFailed,
  RefreshSucceededPayload,
} from '../authenticationSlice';
import { requestRefresh } from './requests';
import {
  AuthenticationResponse,
  RefreshJwtPayload,
  RefreshLogoutRequest,
} from './shared';

export function* watchRefresh() {
  yield takeLatest(REFRESH, handleRefresh);
}

export function* handleRefresh() {
  yield put(refreshStarted());

  const state = yield select((state: ReduxState) => state.authentication);
  const jwtToken = state.jwtToken;
  const refreshToken = state.refreshToken;

  const request: RefreshLogoutRequest = {
    jwtToken,
    refreshToken,
  };

  try {
    const response: AxiosResponse<AuthenticationResponse> = yield call(
      requestRefresh,
      request
    );

    const { jwtToken, refreshToken } = response.data;

    const decodedJwt = jwtDecode<RefreshJwtPayload>(jwtToken);

    const payload: RefreshSucceededPayload = {
      jwtToken,
      jwtTokenExpiryTime: decodedJwt.exp,
      refreshToken,
    };

    yield put(refreshSucceeded(payload));
  } catch (e) {
    yield put(refreshFailed(getErrorsFromError(e)));
  }
}
