import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { ReduxState } from "../../../config/store";
import { getErrorsFromError } from "../../common/saga/shared";
import { sortArrayAlphabetically } from "../../common/shared";
import {
  songActionFailed,
  songActionStarted,
  SongState,
  UpdateSongPayload,
  updateSongSucceeded,
  UPDATE_SONG,
} from "../slice";
import { requestUpdateSong } from "./requests";
import { CreateUpdateSongRequest, SongResponse } from "./shared";

export function* watchUpdateSong() {
  yield takeLatest(UPDATE_SONG, handleUpdateSong);
}

export function* handleUpdateSong(action: PayloadAction<UpdateSongPayload>) {
  yield put(songActionStarted());

  const { title, interpreter, tempo, notes } = action.payload;

  const request: CreateUpdateSongRequest = {
    title,
    interpreter,
    tempo,
    notes,
  };

  try {
    const response: AxiosResponse<SongResponse> = yield call(
      requestUpdateSong,
      action.payload.songId,
      request
    );

    const state: SongState = yield select((state: ReduxState) => state.song);

    const payload = [...state.songs];

    const indexToUpdate = payload.findIndex(
      (value) => value.songId === response.data.songId
    );

    payload[indexToUpdate] = { ...response.data };
    payload.sort((a, b) => sortArrayAlphabetically(a.title, b.title));

    yield put(updateSongSucceeded(payload));
  } catch (e) {
    yield put(songActionFailed(getErrorsFromError(e)));
  }
}
