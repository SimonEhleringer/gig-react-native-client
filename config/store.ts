import { createStore, combineReducers, applyMiddleware } from 'redux';
import playlist from '../domain/playlist/playlistSlice';

const reducer = combineReducers({
  playlist,
});

const store = createStore(reducer);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
