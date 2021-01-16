import {
  LOAD_PLAYLISTS,
  loadPlaylistsStarted,
  loadPlaylistsSucceded,
  loadPlaylistsFailed,
} from './playlistSlice';
import { put, takeLatest } from 'redux-saga/effects';
import PlaylistModel from './PlaylistModel';

export function* watchLoadPlaylists() {
  yield takeLatest(LOAD_PLAYLISTS, handleLoadPlaylists);
}

function* handleLoadPlaylists() {
  yield put(loadPlaylistsStarted());
}

const requestGetAllPlaylists = async () => {};
