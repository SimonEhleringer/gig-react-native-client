import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlaylistEntity from './PlaylistModel';

const name = 'playlist';
export const LOAD_PLAYLISTS = `${name}/loadPlaylists`;

export type PlaylistState = {
  playlists: PlaylistEntity[];
  loading: boolean;
  errors: string[];
};

const initialState: PlaylistState = {
  playlists: [],
  loading: false,
  errors: [],
};

export const loadPlaylists = createAction(LOAD_PLAYLISTS);

const playlistSlice = createSlice({
  name,
  initialState,
  reducers: {
    playlistActionStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    loadPlaylistsSucceded(state, action: PayloadAction<PlaylistEntity[]>) {
      state.playlists = action.payload;
      state.loading = false;
    },
    playlistActionFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  playlistActionStarted,
  loadPlaylistsSucceded,
  playlistActionFailed,
} = playlistSlice.actions;

export default playlistSlice.reducer;
