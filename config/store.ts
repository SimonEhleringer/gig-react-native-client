import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import playlist from '../domain/playlist/playlistSlice';
import authentication from '../domain/authentication/authenticationSlice';
import { watchLogin } from '../domain/authentication/saga/login';
import { watchRegister } from '../domain/authentication/saga/register';
import { watchLogout } from '../domain/authentication/saga/logout';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication,
  playlist,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogout);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
