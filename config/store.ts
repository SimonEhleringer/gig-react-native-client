import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import playlist from '../domain/playlist/playlistSlice';
import authentication from '../domain/authentication/authenticationSlice';
import song from '../domain/song/songSlice';
import { watchLogin } from '../domain/authentication/saga/login';
import { watchRegister } from '../domain/authentication/saga/register';
import { watchLogout } from '../domain/authentication/saga/logout';
import { watchLoadSongs } from '../domain/song/saga/loadSongs';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication,
  playlist,
  song,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogout);

sagaMiddleware.run(watchLoadSongs);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
