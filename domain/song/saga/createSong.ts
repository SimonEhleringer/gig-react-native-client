import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import { sortArrayAlphabetically } from '../../common/shared';
import {
  CREATE_SONG,
  CreateSongPayload,
  songActionStarted,
  songActionFailed,
  createSongSucceeded,
  SongState,
} from '../slice';
import SongEntity from '../SongEntity';
import { requestCreateSong } from './requests';
import { CreateUpdateSongRequest, SongResponse } from './shared';

export function* watchCreateSong() {
  yield takeLatest(CREATE_SONG, handleCreateSong);
}

export function* handleCreateSong(action: PayloadAction<CreateSongPayload>) {
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
      requestCreateSong,
      request
    );

    const state: SongState = yield select((state: ReduxState) => state.song);
    const payload = state.songs.slice();

    const { songId, title, interpreter, tempo, notes } = response.data;

    const newSong: SongEntity = {
      songId,
      title,
      interpreter,
      tempo,
      notes,
    };

    payload.push(newSong);
    payload.sort((a, b) => sortArrayAlphabetically(a.title, b.title));

    yield put(createSongSucceeded(payload));
  } catch (e) {
    yield put(songActionFailed(getErrorsFromError(e)));
  }
}
