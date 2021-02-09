import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { PayloadBase } from '../common/slice';
import SongEntity from './SongEntity';

const name = 'song';
export const LOAD_SONGS = `${name}/loadSongs`;
export const CREATE_SONG = `${name}/createSong`;

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

export const createSong = createAction<CreateSongPayload>(CREATE_SONG);

const songSlice = createSlice({
  name,
  initialState,
  reducers: {
    songActionStarted(state) {
      state.loading = true;
      state.errors = [];
    },
    loadSongsSucceeded(state, action: PayloadAction<SongEntity[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    createSongSucceeded(state, action: PayloadAction<SongEntity>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    songActionFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  songActionStarted,
  loadSongsSucceeded,
  createSongSucceeded,
  songActionFailed,
} = songSlice.actions;

export default songSlice.reducer;

export interface CreateSongPayload extends PayloadBase {
  title: string;
  interpreter: string;
  tempo: number;
  notes: string;
}
