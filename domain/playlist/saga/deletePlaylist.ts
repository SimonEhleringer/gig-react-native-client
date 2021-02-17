import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import {
  DELETE_PLAYLIST,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
} from '../slice';
import { requestDeletePlaylist } from './requests';

export function* watchDeletePlaylist() {
  yield takeLatest(DELETE_PLAYLIST, handleDeletePlaylist);
}

function* handleDeletePlaylist(action: PayloadAction<string>) {
  yield put(playlistActionStarted());

  try {
    yield call(requestDeletePlaylist, action.payload);

    const state: PlaylistState = yield select(
      (state: ReduxState) => state.playlist
    );
    const payload = [...state.playlists];

    const indexToRemove = payload.findIndex(
      (value) => value.playlistId === action.payload
    );

    payload.splice(indexToRemove, 1);

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
