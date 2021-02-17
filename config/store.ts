import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import playlist from '../domain/playlist/slice';
import authentication from '../domain/authentication/slice';
import song from '../domain/song/slice';
import getSongBpmSong from '../domain/song/getSongBpmSong/slice';
import { watchLogin } from '../domain/authentication/saga/login';
import { watchRegister } from '../domain/authentication/saga/register';
import { watchLogout } from '../domain/authentication/saga/logout';
import { watchLoadSongs } from '../domain/song/saga/loadSongs';
import { watchCreateSong } from '../domain/song/saga/createSong';
import { watchSearchSongs } from '../domain/song/getSongBpmSong/saga/searchSongs';
import { watchUpdateSong } from '../domain/song/saga/updateSong';
import { watchDeleteSong } from '../domain/song/saga/deleteSong';
import { watchLoadPlaylists } from '../domain/playlist/saga/loadPlaylists';
import { watchCreatePlaylist } from '../domain/playlist/saga/createPlaylist';
import { watchUpdatePlaylist } from '../domain/playlist/saga/updatePlaylist';
import { watchDeletePlaylist } from '../domain/playlist/saga/deletePlaylist';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication,
  playlist,
  song,
  getSongBpmSong,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogout);

sagaMiddleware.run(watchLoadSongs);
sagaMiddleware.run(watchCreateSong);
sagaMiddleware.run(watchUpdateSong);
sagaMiddleware.run(watchDeleteSong);

sagaMiddleware.run(watchLoadPlaylists);
sagaMiddleware.run(watchCreatePlaylist);
sagaMiddleware.run(watchUpdatePlaylist);
sagaMiddleware.run(watchDeletePlaylist);

sagaMiddleware.run(watchSearchSongs);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
