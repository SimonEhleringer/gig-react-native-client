import {
  LOAD_PLAYLISTS,
  loadPlaylistsStarted,
  loadPlaylistsSucceded,
  loadPlaylistsFailed,
} from './playlistSlice';
import { put, takeLatest } from 'redux-saga/effects';
import PlaylistModel from './PlaylistModel';
import db from '../../config/db';
import { isAnyOf } from '@reduxjs/toolkit';

export function* watchLoadPlaylists() {
  yield takeLatest(LOAD_PLAYLISTS, handleLoadPlaylists);
}

function* handleLoadPlaylists() {
  yield put(loadPlaylistsStarted());
}

// const requestGetAllPlaylists = async () => {
//   let resultSet: any;

//   db.transaction((tx) => {
//     tx.executeSql(
//       `
//       SELECT PlaylistId, Name
//       FROM Playlists
//       ORDER BY PlaylistId
//     `,
//       undefined,
//       (txObj, result) => (resultSet = result),
//       (txObj, error) => true
//     );
//   });

//   console.log(resultSet.rows._array);
// };
