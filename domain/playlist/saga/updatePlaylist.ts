import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import { sortArrayAlphabetically } from '../../common/shared';
import {
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
  UpdatePlaylistPayload,
  UPDATE_PLAYLIST,
} from '../slice';
import { requestUpdatePlaylist } from './requests';
import { CreateUpdatePlaylistRequest, PlaylistResponse } from './shared';

export function* watchUpdatePlaylist() {
  yield takeLatest(UPDATE_PLAYLIST, handleUpdatePlaylist);
}

function* handleUpdatePlaylist(action: PayloadAction<UpdatePlaylistPayload>) {
  yield put(playlistActionStarted());

  const { playlistId, name } = action.payload;

  const request: CreateUpdatePlaylistRequest = {
    name,
    songIds: [],
  };

  console.log('request erstellt');
  console.log(request);
  console.log(playlistId);

  try {
    const response: AxiosResponse<PlaylistResponse> = yield call(
      requestUpdatePlaylist,
      playlistId,
      request
    );

    console.log('response ist gekommen');

    const state: PlaylistState = yield select(
      (state: ReduxState) => state.playlist
    );
    const payload = [...state.playlists];

    const indexToUpdate = payload.findIndex(
      (value) => value.playlistId === response.data.playlistId
    );
    payload[indexToUpdate] = { ...response.data };

    payload.sort((a, b) => sortArrayAlphabetically(a.name, b.name));

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
