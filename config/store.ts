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
import { watchAddSongToPlaylist } from '../domain/playlist/saga/addSongToPlaylist';
import { watchRemoveSongFromPlaylist } from '../domain/playlist/saga/removeSongFromPlaylist';
import { watchMoveSongInPlaylist } from '../domain/playlist/saga/moveSongInPlaylist';
import { watchAddNewSongToPlaylist } from '../domain/playlist/saga/addNewSongToPlaylist';

import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['authentication', 'playlist', 'song', 'getSongBpmSong'],
};

const authenticationPersistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  blacklist: ['loading', 'errors'],
};

const playlistPersistConfig = {
  key: 'playlist',
  storage: AsyncStorage,
  blacklist: ['loading', 'errors'],
};

const songPersistConfig = {
  key: 'song',
  storage: AsyncStorage,
  blacklist: ['loading', 'errors'],
};

const reducer = combineReducers({
  authentication: persistReducer(authenticationPersistConfig, authentication),
  playlist: persistReducer(playlistPersistConfig, playlist),
  song: persistReducer(songPersistConfig, song),
  getSongBpmSong,
});

const persistedReducer = persistReducer(rootPersistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

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
sagaMiddleware.run(watchAddSongToPlaylist);
sagaMiddleware.run(watchRemoveSongFromPlaylist);
sagaMiddleware.run(watchMoveSongInPlaylist);
sagaMiddleware.run(watchAddNewSongToPlaylist);

sagaMiddleware.run(watchSearchSongs);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
