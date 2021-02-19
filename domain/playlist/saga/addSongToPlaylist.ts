import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import {
  AddSongToPlaylistPayload,
  ADD_SONG_TO_PLAYLIST,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
} from '../slice';
import { requestUpdatePlaylist } from './requests';
import {
  getPlaylistActionSucceededPayload,
  getRequestForAddingSongToPlaylist,
  PlaylistResponse,
} from './shared';

export function* watchAddSongToPlaylist() {
  yield takeLatest(ADD_SONG_TO_PLAYLIST, handleAddSongToPlaylist);
}

function* handleAddSongToPlaylist(
  action: PayloadAction<AddSongToPlaylistPayload>
) {
  yield put(playlistActionStarted());

  const state: PlaylistState = yield select(
    (state: ReduxState) => state.playlist
  );

  const { playlistId, songId } = action.payload;

  const request = getRequestForAddingSongToPlaylist(state, playlistId, songId);

  try {
    const response: AxiosResponse<PlaylistResponse> = yield call(
      requestUpdatePlaylist,
      playlistId,
      request
    );

    const payload = getPlaylistActionSucceededPayload(state, response.data);

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
