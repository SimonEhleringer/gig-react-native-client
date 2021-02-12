import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getErrorsFromError } from '../../common/saga/shared';
import SongEntity from '../SongEntity';
import {
  songActionStarted,
  loadSongsSucceeded,
  songActionFailed,
  LOAD_SONGS,
} from '../slice';
import { requestLoadSongs } from './requests';
import { ReduxState } from '../../../config/store';
import { AuthenticationState } from '../../authentication/slice';
import { SongResponse } from './shared';
import { sortArrayAlphabetically } from '../../common/shared';

export function* watchLoadSongs() {
  yield takeLatest(LOAD_SONGS, handleLoadSongs);
}

export function* handleLoadSongs() {
  yield put(songActionStarted());

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

    songEntities.sort((a, b) => sortArrayAlphabetically(a.title, b.title));

    yield put(loadSongsSucceeded(songEntities));
  } catch (e) {
    yield put(songActionFailed(getErrorsFromError(e)));
  }
}
