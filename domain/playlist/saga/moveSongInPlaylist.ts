import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import {
  MoveSongInPlaylistPayload,
  MOVE_SONG_IN_PLAYLIST,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
  updatePlaylist,
} from '../slice';
import { requestUpdatePlaylist } from './requests';
import {
  CreateUpdatePlaylistRequest,
  getPlaylistActionSucceededPayload,
  PlaylistNotFoundError,
  PlaylistResponse,
} from './shared';

export function* watchMoveSongInPlaylist() {
  yield takeLatest(MOVE_SONG_IN_PLAYLIST, handleMoveSongInPlaylist);
}

function* handleMoveSongInPlaylist(
  action: PayloadAction<MoveSongInPlaylistPayload>
) {
  yield put(playlistActionStarted());

  const { playlistId, songIndex, direction } = action.payload;

  const state: PlaylistState = yield select(
    (state: ReduxState) => state.playlist
  );
  const playlist = state.playlists.find(
    (playlist) => playlist.playlistId === playlistId
  );

  if (!playlist) {
    throw new PlaylistNotFoundError(playlistId);
  }

  const songIds = playlist.songs.map((song) => song.songId);

  const song = songIds[songIndex];
  songIds.splice(songIndex, 1);

  if (direction === 'up') {
    songIds.splice(songIndex - 1, 0, song);
  } else if (direction === 'down') {
    songIds.splice(songIndex + 1, 0, song);
  }

  const request: CreateUpdatePlaylistRequest = {
    name: playlist.name,
    songIds,
  };

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
