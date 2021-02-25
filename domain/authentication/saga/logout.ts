import { AxiosError } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { ErrorResponse, getErrorsFromError } from '../../common/saga/shared';
import {
  AuthenticationState,
  LOGOUT,
  logoutFailed,
  logoutStarted,
  logoutSucceeded,
} from '../slice';
import { requestLogout } from './requests';
import { RefreshLogoutRequest } from './shared';

export function* watchLogout() {
  yield takeLatest(LOGOUT, handleLogout);
}

function* handleLogout() {
  yield put(logoutStarted());

  try {
    const state: AuthenticationState = yield select(
      (state: ReduxState) => state.authentication
    );

    const refreshToken = state.refreshToken;
    const jwtToken = state.jwtToken;

    const logoutRequest: RefreshLogoutRequest = {
      jwtToken,
      refreshToken,
    };

    yield call(requestLogout, logoutRequest);

    yield put(logoutSucceeded());
  } catch (e) {
    yield put(logoutFailed(getErrorsFromError(e)));
  }
}
