import { SongResponse } from '../../song/saga/shared';

export interface PlaylistResponse {
  playlistId: string;
  name: string;
  songs: SongResponse[];
}
