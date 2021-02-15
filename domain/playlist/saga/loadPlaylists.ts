import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getErrorsFromError } from '../../common/saga/shared';
import { sortArrayAlphabetically } from '../../common/shared';
import SongEntity from '../../song/SongEntity';
import PlaylistEntity from '../PlaylistModel';
import {
  loadPlaylistsSucceded,
  LOAD_PLAYLISTS,
  playlistActionFailed,
  playlistActionStarted,
} from '../slice';
import { requestLoadPlaylists } from './requests';
import { PlaylistResponse } from './shared';

export function* watchLoadPlaylists() {
  yield takeLatest(LOAD_PLAYLISTS, handleLoadPlaylists);
}

function* handleLoadPlaylists() {
  yield put(playlistActionStarted());

  try {
    const response: AxiosResponse<PlaylistResponse[]> = yield call(
      requestLoadPlaylists
    );

    const payload: PlaylistEntity[] = [...response.data];

    yield put(loadPlaylistsSucceded(payload));
  } catch (e) {
    yield put(playlistActionFailed(getErrorsFromError(e)));
  }
}
