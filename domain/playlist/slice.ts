import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSongPayload } from "../song/slice";
import PlaylistEntity from "./PlaylistModel";

const name = "playlist";
export const LOAD_PLAYLISTS = `${name}/loadPlaylists`;
export const CREATE_PLAYLIST = `${name}/createPlaylist`;
export const UPDATE_PLAYLIST = `${name}/updatePlaylist`;
export const DELETE_PLAYLIST = `${name}/deletePlaylist`;

export const ADD_SONG_TO_PLAYLIST = `${name}/addSongToPlaylist`;
export const REMOVE_SONG_FROM_PLAYLIST = `${name}/removeSongFromPlaylist`;
export const MOVE_SONG_IN_PLAYLIST = `${name}/moveSongInPlaylist`;
export const ADD_NEW_SONG_TO_PLAYLIST = `${name}/addNewSongToPlaylist`;

export type PlaylistState = {
  playlists: PlaylistEntity[];
  loading: boolean;
  errors: string[];
  // isGigModeActive: boolean;
};

const initialState: PlaylistState = {
  playlists: [],
  loading: false,
  errors: [],
  // isGigModeActive: false,
};

export const loadPlaylists = createAction(LOAD_PLAYLISTS);

export const createPlaylist = createAction<CreatePlaylistPayload>(
  CREATE_PLAYLIST
);

export const updatePlaylist = createAction<UpdatePlaylistPayload>(
  UPDATE_PLAYLIST
);

export const deletePlaylist = createAction<string>(DELETE_PLAYLIST);

export const addSongToPlaylist = createAction<AddSongToPlaylistPayload>(
  ADD_SONG_TO_PLAYLIST
);

export const removeSongFromPlaylist = createAction<RemoveSongFromPlaylistPayload>(
  REMOVE_SONG_FROM_PLAYLIST
);

export const moveSongInPlaylist = createAction<MoveSongInPlaylistPayload>(
  MOVE_SONG_IN_PLAYLIST
);

export const addNewSongToPlaylist = createAction<AddNewSongToPlaylistPayload>(
  ADD_NEW_SONG_TO_PLAYLIST
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
    },
    playlistActionFailed(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
      state.loading = false;
    },
    setPlaylists(state, action: PayloadAction<PlaylistEntity[]>) {
      state.playlists = action.payload;
    },
    // setIsGigModeActive(state, action: PayloadAction<boolean>) {
    //   state.isGigModeActive = action.payload;
    // },
  },
});

export const {
  playlistActionStarted,
  playlistActionSucceeded,
  playlistActionFailed,
  setPlaylists,
} = playlistSlice.actions;

export default playlistSlice.reducer;

export interface CreatePlaylistPayload {
  name: string;
}

export interface UpdatePlaylistPayload {
  playlistId: string;
  name: string;
}

export interface AddSongToPlaylistPayload {
  playlistId: string;
  songId: string;
}

export interface RemoveSongFromPlaylistPayload {
  playlistId: string;
  songIndex: number;
}

export interface MoveSongInPlaylistPayload {
  playlistId: string;
  songIndex: number;
  direction: "up" | "down";
}

export interface AddNewSongToPlaylistPayload {
  playlistId: string;
  createSongPayload: CreateSongPayload;
}
