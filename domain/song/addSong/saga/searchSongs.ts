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
import { GetSongBpmSearchSongResponse } from './shared';

export function* watchSearchSongs() {
  yield takeLatest(SEARCH_SONGS, handleSearchSongs);
}

function* handleSearchSongs(action: PayloadAction<string>) {
  yield put(searchSongsStarted());

  const search = action.payload;

  console.log(search);

  try {
    const response: AxiosResponse<GetSongBpmSearchSongResponse> = yield call(
      requestSearchSongs,
      search
    );

    console.log(response);

    const payload: GetSongBpmSongModel[] = [];

    response.data.search.forEach((song) => {
      const { title, artist, tempo } = song;

      // Map artist to interpreter
      let interpreter = artist.name;

      // artist.forEach((singleArtist, index) => {
      //   interpreter += singleArtist.name;

      //   if (index < artist.length - 1) {
      //     interpreter += ', ';
      //   }
      // });

      const getSongBpmSongModel: GetSongBpmSongModel = {
        title,
        interpreter,
        tempo,
      };

      payload.push(getSongBpmSongModel);
    });

    yield put(searchSongsSucceded(payload));
  } catch (e) {
    yield put(searchSongsFailed(getErrorsFromError(e)));
  }
}
