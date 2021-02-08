import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GetSongBpmSongModel from './GetSongBpmSongModel';

const name = 'addSong';
export const SEARCH_SONGS = `${name}/searchSongs`;

export type addSongState = {
  loading: boolean;
  errors: string[];
  getSongBpmSongs: GetSongBpmSongModel[];
};

const initialState: addSongState = {
  loading: false,
  errors: [],
  getSongBpmSongs: [],
};

export const searchSongs = createAction<string>(SEARCH_SONGS);

const addSongSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchSongsStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    searchSongsSucceded(state, action: PayloadAction<GetSongBpmSongModel[]>) {
      state.getSongBpmSongs = action.payload;
      state.loading = false;
    },
    searchSongsFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  searchSongsStarted,
  searchSongsSucceded,
  searchSongsFailed,
} = addSongSlice.actions;

export default addSongSlice.reducer;
