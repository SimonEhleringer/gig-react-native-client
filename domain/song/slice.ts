import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import SongEntity from './SongEntity';

const name = 'song';
export const LOAD_SONGS = `${name}/loadSongs`;
export const CREATE_SONG = `${name}/createSong`;
export const UPDATE_SONG = `${name}/updateSong`;
export const DELETE_SONG = `${name}/deleteSong`;

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

export const updateSong = createAction<UpdateSongPayload>(UPDATE_SONG);

export const deleteSong = createAction<string>(DELETE_SONG);

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
    createSongSucceeded(state, action: PayloadAction<SongEntity[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    updateSongSucceeded(state, action: PayloadAction<SongEntity[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    deleteSongSucceeded(state, action: PayloadAction<SongEntity[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    songActionFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;

      console.log(action.payload);
    },
  },
});

export const {
  songActionStarted,
  loadSongsSucceeded,
  createSongSucceeded,
  updateSongSucceeded,
  deleteSongSucceeded,
  songActionFailed,
} = songSlice.actions;

export default songSlice.reducer;

export interface CreateSongPayload {
  title: string;
  interpreter: string;
  tempo: number;
  notes: string;
}

export interface UpdateSongPayload {
  songId: string;
  title: string;
  interpreter: string;
  tempo: number;
  notes: string;
}
