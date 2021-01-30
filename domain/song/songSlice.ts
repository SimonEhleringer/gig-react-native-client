import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import SongEntity from './SongEntity';

const name = 'song';
const LOAD_SONGS = `${name}/loadSongs`;

export type SongState = {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
};

const initialState: SongState = {
  songs: [],
  loading: false,
  errors: [],
};

export const loadSongs = createAction(LOAD_SONGS);

const songSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadSongsStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    loadSongsSucceeded(state, action: PayloadAction<SongEntity[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    loadSongsFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loadSongsStarted,
  loadSongsSucceeded,
  loadSongsFailed,
} = songSlice.actions;

export default songSlice;
