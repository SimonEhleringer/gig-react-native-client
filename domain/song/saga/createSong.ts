import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getErrorsFromError } from '../../common/saga';
import {
  CREATE_SONG,
  CreateSongPayload,
  songActionStarted,
  songActionFailed,
  createSongSucceeded,
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
    console.log(request);

    const response: AxiosResponse<SongResponse> = yield call(
      requestCreateSong,
      request
    );

    console.log(response);

    const { songId, title, interpreter, tempo, notes } = response.data;

    const payload: SongEntity = {
      songId,
      title,
      interpreter,
      tempo,
      notes,
    };

    console.log(payload);

    yield put(createSongSucceeded(payload));
  } catch (e) {
    yield put(songActionFailed(getErrorsFromError(e)));

    console.log(e);
  }
}
