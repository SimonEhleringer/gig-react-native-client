import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getErrorsFromError } from '../../common/saga';
import SongEntity from '../SongEntity';
import {
  loadSongsStarted,
  loadSongsSucceeded,
  loadSongsFailed,
  LOAD_SONGS,
} from '../songSlice';
import { requestLoadSongs } from './requests';
import { ReduxState } from '../../../config/store';
import { AuthenticationState } from '../../authentication/authenticationSlice';
import { SongResponse } from './shared';

export function* watchLoadSongs() {
  yield takeLatest(LOAD_SONGS, handleLoadSongs);
}

export function* handleLoadSongs() {
  yield put(loadSongsStarted());

  try {
    // Firt get JwtToken for authorization
    const authState: AuthenticationState = yield select(
      (state: ReduxState) => state.authentication
    );

    const jwtToken = authState.jwtToken;

    const response: AxiosResponse<SongResponse[]> = yield call(
      requestLoadSongs,
      jwtToken
    );

    // Map SongResponses to SongEntities
    const songEntities = response.data.map((song) => {
      const songEntity: SongEntity = {
        songId: song.songId,
        title: song.title,
        interpreter: song.interpreter,
        tempo: song.tempo,
        notes: song.notes,
      };

      return songEntity;
    });

    yield put(loadSongsSucceeded(songEntities));
  } catch (e) {
    yield put(loadSongsFailed(getErrorsFromError(e)));
  }
}
