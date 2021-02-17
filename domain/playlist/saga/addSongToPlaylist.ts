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
import { CreateUpdatePlaylistRequest, PlaylistResponse } from './shared';

export function* watchAddSongToPlaylist() {
  yield takeLatest(ADD_SONG_TO_PLAYLIST, handleAddSongToPlaylist);
}

function* handleAddSongToPlaylist(
  action: PayloadAction<AddSongToPlaylistPayload>
) {
  yield put(playlistActionStarted());

  const { playlistId, songId } = action.payload;

  const state: PlaylistState = yield select(
    (state: ReduxState) => state.playlist
  );
  const playlist = state.playlists.find(
    (value) => value.playlistId === playlistId
  );

  if (!playlist) {
    throw new Error(
      `Playlist mit der ID ${playlistId} konnte nicht gefunden werden.`
    );
  }

  const songIds = playlist.songs.map((song) => {
    return song.songId;
  });

  songIds.push(songId);

  const request: CreateUpdatePlaylistRequest = {
    name: playlist.name,
    songIds: songIds,
  };

  try {
    const response: AxiosResponse<PlaylistResponse> = yield call(
      requestUpdatePlaylist,
      playlist.playlistId,
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
