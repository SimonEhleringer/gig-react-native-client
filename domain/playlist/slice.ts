import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlaylistEntity from './PlaylistModel';

const name = 'playlist';
export const LOAD_PLAYLISTS = `${name}/loadPlaylists`;
export const CREATE_PLAYLIST = `${name}/createPlaylist`;

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

export const createPlaylist = createAction<CreatePlaylistPayload>(
  CREATE_PLAYLIST
);

const playlistSlice = createSlice({
  name,
  initialState,
  reducers: {
    playlistActionStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    playlistActionSucceeded(state, action: PayloadAction<PlaylistEntity[]>) {
      state.playlists = action.payload;
      state.loading = false;

      console.log('loading ist ' + state.loading);
    },
    playlistActionFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  playlistActionStarted,
  playlistActionSucceeded,
  playlistActionFailed,
} = playlistSlice.actions;

export default playlistSlice.reducer;

export interface CreatePlaylistPayload {
  name: string;
}
