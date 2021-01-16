import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlaylistModel from './PlaylistModel';

const name = 'playlist';
export const LOAD_PLAYLISTS = `${name}/loadPlaylists`;

export type PlaylistState = {
  loading: boolean;
  error: string | undefined;
  playlists: PlaylistModel[];
};

const initialState: PlaylistState = {
  loading: false,
  error: undefined,
  playlists: [],
};

export const loadPlaylists = createAction(LOAD_PLAYLISTS);

const playlistSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadPlaylistsStarted(state) {
      state.loading = true;
      state.error = undefined;
    },
    loadPlaylistsSucceded(state, action: PayloadAction<PlaylistModel[]>) {
      state.loading = false;
      state.playlists = action.payload;
    },
    loadPlaylistsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loadPlaylistsStarted,
  loadPlaylistsSucceded,
  loadPlaylistsFailed,
} = playlistSlice.actions;

export default playlistSlice.reducer;
