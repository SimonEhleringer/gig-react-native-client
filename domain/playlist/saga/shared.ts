import { SongResponse } from '../../song/saga/shared';
import { PlaylistState } from '../slice';

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
