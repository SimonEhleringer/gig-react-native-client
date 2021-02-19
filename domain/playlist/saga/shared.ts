import { SongResponse } from '../../song/saga/shared';
import { AddSongToPlaylistPayload, PlaylistState } from '../slice';

export interface CreateUpdatePlaylistRequest {
  name: string;
  songIds: string[];
}

export interface PlaylistResponse {
  playlistId: string;
  name: string;
  songs: SongResponse[];
}

export class PlaylistNotFoundError extends Error {
  constructor(playlistId: string) {
    super(`Es konnte keine Playlist mit der ID ${playlistId} gefunden werden.`);
  }
}

export const getPlaylistActionSucceededPayload = (
  state: PlaylistState,
  playlistResponse: PlaylistResponse
) => {
  const payload = [...state.playlists];

  const indexToUpdate = payload.findIndex(
    (playlist) => playlist.playlistId === playlistResponse.playlistId
  );

  payload[indexToUpdate] = playlistResponse;

  return payload;
};

export const getRequestForAddingSongToPlaylist = (
  state: PlaylistState,
  playlistId: string,
  songId: string
) => {
  const playlist = state.playlists.find(
    (value) => value.playlistId === playlistId
  );

  if (!playlist) {
    throw new PlaylistNotFoundError(playlistId);
  }

  const songIds = playlist.songs.map((song) => {
    return song.songId;
  });

  songIds.push(songId);

  const request: CreateUpdatePlaylistRequest = {
    name: playlist.name,
    songIds: songIds,
  };

  return request;
};
