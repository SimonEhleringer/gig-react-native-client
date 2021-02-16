import { SongResponse } from '../../song/saga/shared';

export interface CreateUpdatePlaylistRequest {
  name: string;
  songIds: string[];
}

export interface PlaylistResponse {
  playlistId: string;
  name: string;
  songs: SongResponse[];
}
