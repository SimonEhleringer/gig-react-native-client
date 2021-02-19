import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import { requestCreateSong } from '../../song/saga/requests';
import { CreateUpdateSongRequest, SongResponse } from '../../song/saga/shared';
import {
  AddNewSongToPlaylistPayload,
  ADD_NEW_SONG_TO_PLAYLIST,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
} from '../slice';
import { requestUpdatePlaylist } from './requests';
import {
  getPlaylistActionSucceededPayload,
  getRequestForAddingSongToPlaylist,
  PlaylistNotFoundError,
  PlaylistResponse,
} from './shared';

export function* watchAddNewSongToPlaylist() {
  yield takeLatest(ADD_NEW_SONG_TO_PLAYLIST, handleAddNewSongToPlaylist);
}

function* handleAddNewSongToPlaylist(
  action: PayloadAction<AddNewSongToPlaylistPayload>
) {
  yield put(playlistActionStarted());

  const { playlistId, createSongPayload } = action.payload;

  const createSongRequest: CreateUpdateSongRequest = createSongPayload;

  try {
    const createSongResponse: AxiosResponse<SongResponse> = yield call(
      requestCreateSong,
      createSongRequest
    );

    const state: PlaylistState = yield select(
      (state: ReduxState) => state.playlist
    );

    const updatePlaylistRequest = getRequestForAddingSongToPlaylist(
      state,
      playlistId,
      createSongResponse.data.songId
    );

    const updatePlaylistResponse: AxiosResponse<PlaylistResponse> = yield call(
      requestUpdatePlaylist,
      playlistId,
      updatePlaylistRequest
    );

    const payload = getPlaylistActionSucceededPayload(
      state,
      updatePlaylistResponse.data
    );

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
