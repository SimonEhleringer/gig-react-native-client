import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import PlaylistEntity from "./PlaylistModel";

const name = "playlist";
export const LOAD_PLAYLISTS = `${name}/loadPlaylists`;
export const CREATE_PLAYLIST = `${name}/createPlaylist`;
export const UPDATE_PLAYLIST = `${name}/updatePlaylist`;
export const DELETE_PLAYLIST = `${name}/deletePlaylist`;

export const ADD_SONG_TO_PLAYLIST = `${name}/addSongToPlaylist`;
export const REMOVE_SONG_FROM_PLAYLIST = `${name}/removeSongFromPlaylist`;

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

export const updatePlaylist = createAction<UpdatePlaylistPayload>(
  UPDATE_PLAYLIST
);

export const deletePlaylist = createAction<string>(DELETE_PLAYLIST);

export const addSongToPlaylist = createAction<AddRemoveSongPlaylistPayload>(
  ADD_SONG_TO_PLAYLIST
);

export const removeSongFromPlaylist = createAction<AddRemoveSongPlaylistPayload>(
  REMOVE_SONG_FROM_PLAYLIST
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

      console.log("loading ist " + state.loading);
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

export interface UpdatePlaylistPayload {
  playlistId: string;
  name: string;
}

export interface AddRemoveSongPlaylistPayload {
  playlistId: string;
  songId: string;
}
