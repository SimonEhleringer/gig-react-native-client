import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { ReduxState } from "../../../config/store";
import { getErrorsFromError } from "../../common/saga/shared";
import { sortArrayAlphabetically } from "../../common/shared";
import PlaylistEntity from "../PlaylistModel";
import {
  CreatePlaylistPayload,
  CREATE_PLAYLIST,
  playlistActionFailed,
  playlistActionStarted,
  playlistActionSucceeded,
  PlaylistState,
} from "../slice";
import { requestCreatePlaylist } from "./requests";
import { CreateUpdatePlaylistRequest, PlaylistResponse } from "./shared";

export function* watchCreatePlaylist() {
  yield takeLatest(CREATE_PLAYLIST, handleCreatePlaylist);
}

function* handleCreatePlaylist(action: PayloadAction<CreatePlaylistPayload>) {
  yield put(playlistActionStarted());

  const { name } = action.payload;

  const request: CreateUpdatePlaylistRequest = {
    name,
    songIds: [],
  };

  try {
    const response: AxiosResponse<PlaylistResponse> = yield call(
      requestCreatePlaylist,
      request
    );

    const state: PlaylistState = yield select(
      (state: ReduxState) => state.playlist
    );
    const payload = [...state.playlists];

    const newPlaylist: PlaylistEntity = response.data;

    payload.push(newPlaylist);
    payload.sort((a, b) => sortArrayAlphabetically(a.name, b.name));

    yield put(playlistActionSucceeded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
