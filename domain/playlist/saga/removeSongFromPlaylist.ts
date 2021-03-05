import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, select, takeLatest, call } from "redux-saga/effects";
import { ReduxState } from "../../../config/store";
import { getErrorsFromError } from "../../common/saga/shared";
import {
  AddSongToPlaylistPayload,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
  RemoveSongFromPlaylistPayload,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../slice";
import { requestUpdatePlaylist } from "./requests";
import {
  CreateUpdatePlaylistRequest,
  getPlaylistActionSucceededPayload,
  PlaylistNotFoundError,
  PlaylistResponse,
} from "./shared";

export function* watchRemoveSongFromPlaylist() {
  yield takeLatest(REMOVE_SONG_FROM_PLAYLIST, handleRemoveSongFromPlaylist);
}

function* handleRemoveSongFromPlaylist(
  action: PayloadAction<RemoveSongFromPlaylistPayload>
) {
  yield put(playlistActionStarted());

  const { playlistId, songIndex } = action.payload;

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

  songIds.splice(songIndex, 1);

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
