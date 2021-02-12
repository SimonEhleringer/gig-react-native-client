import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import { ReduxState } from '../../../config/store';
import { getErrorsFromError } from '../../common/saga/shared';
import {
  DELETE_SONG,
  songActionFailed,
  songActionStarted,
  SongState,
} from '../slice';
import { requestDeleteSong } from './requests';
import { deleteSongSucceeded } from '../slice';

export function* watchDeleteSong() {
  yield takeLatest(DELETE_SONG, handleDeleteSong);
}

function* handleDeleteSong(action: PayloadAction<string>) {
  yield put(songActionStarted());

  try {
    yield call(requestDeleteSong, action.payload);

    const state: SongState = yield select((state: ReduxState) => state.song);

    const payload = [...state.songs];

    const indexToRemove = payload.findIndex(
      (value) => value.songId === action.payload
    );

    payload.splice(indexToRemove, 1);

    yield put(deleteSongSucceeded(payload));
  } catch (e) {
    yield put(songActionFailed(getErrorsFromError(e)));
  }
}
