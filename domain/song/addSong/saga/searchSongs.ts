import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getErrorsFromError } from '../../../common/saga';
import {
  searchSongsFailed,
  searchSongsStarted,
  searchSongsSucceded,
  SEARCH_SONGS,
} from '../addSongSlice';
import GetSongBpmSongModel from '../GetSongBpmSongModel';
import { requestSearchSongs } from './requests';
import {
  GetSongBpmSearchSongResponse,
  isGetSongBpmErrorResponse,
} from './shared';

export function* watchSearchSongs() {
  yield takeLatest(SEARCH_SONGS, handleSearchSongs);
}

function* handleSearchSongs(action: PayloadAction<string>) {
  yield put(searchSongsStarted());

  const search = action.payload;

  console.log(search);

  if (search.trim() === '') {
    yield put(searchSongsSucceded([]));
    return;
  }

  try {
    const response: AxiosResponse<GetSongBpmSearchSongResponse> = yield call(
      requestSearchSongs,
      search
    );

    console.log(response);

    const payload: GetSongBpmSongModel[] = [];

    const searchResponse = response.data.search;

    // Search can be an error object or an array with results. Only map over the results if it is no error object
    if (!isGetSongBpmErrorResponse(searchResponse)) {
      // Map response to payload
      searchResponse.forEach((song) => {
        const { title, artist, tempo } = song;

        // Map artist to interpreter
        let interpreter = artist.name;

        const getSongBpmSongModel: GetSongBpmSongModel = {
          title,
          interpreter,
          tempo,
        };

        payload.push(getSongBpmSongModel);
      });
    }

    yield put(searchSongsSucceded(payload));
  } catch (e) {
    console.log(e + ' (im Catch)');
    console.log(e.message);

    yield put(searchSongsFailed(getErrorsFromError(e)));
  }
}
