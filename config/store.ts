import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import playlist from '../domain/playlist/playlistSlice';
import authentication from '../domain/authentication/slice';
import song from '../domain/song/slice';
import addSong from '../domain/song/getSongBpmSong/slice';
import { watchLogin } from '../domain/authentication/saga/login';
import { watchRegister } from '../domain/authentication/saga/register';
import { watchLogout } from '../domain/authentication/saga/logout';
import { watchLoadSongs } from '../domain/song/saga/loadSongs';
import { watchCreateSong } from '../domain/song/saga/createSong';
import { watchSearchSongs } from '../domain/song/getSongBpmSong/saga/searchSongs';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication,
  playlist,
  song,
  addSong,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogout);

sagaMiddleware.run(watchLoadSongs);
sagaMiddleware.run(watchCreateSong);

sagaMiddleware.run(watchSearchSongs);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
