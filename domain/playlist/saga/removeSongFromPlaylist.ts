import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, select, takeLatest, call } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import {
  AddRemoveSongPlaylistPayload,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
  REMOVE_SONG_FROM_PLAYLIST,
} from '../slice';
import { requestUpdatePlaylist } from './requests';
import { CreateUpdatePlaylistRequest, PlaylistResponse } from './shared';

export function* watchRemoveSongFromPlaylist() {
  yield takeLatest(REMOVE_SONG_FROM_PLAYLIST, handleRemoveSongFromPlaylist);
}

function* handleRemoveSongFromPlaylist(
  action: PayloadAction<AddRemoveSongPlaylistPayload>
) {
  console.log('In saga :)');

  yield put(playlistActionStarted());

  const { playlistId, songId } = action.payload;

  const state: PlaylistState = yield select(
    (state: ReduxState) => state.playlist
  );

  const playlist = state.playlists.find(
    (playlist) => playlist.playlistId === playlistId
  );

  if (!playlist) {
    throw new Error(
      `Playlist mit der ID ${playlistId} konnte nicht gefunden werden.`
    );
  }

  const songIds = playlist.songs.map((song) => song.songId);

  const indexToRemove = playlist.songs.findIndex(
    (song) => song.songId === songId
  );
  songIds.splice(indexToRemove, 1);

  const request: CreateUpdatePlaylistRequest = {
    name: playlist.name,
    songIds,
  };

  console.log(request);

  try {
    const response: AxiosResponse<PlaylistResponse> = yield call(
      requestUpdatePlaylist,
      playlistId,
      request
    );

    const payload = [...state.playlists];

    const indexToUpdate = payload.findIndex(
      (playlist) => playlist.playlistId === response.data.playlistId
    );

    payload[indexToUpdate] = response.data;

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
