import SongEntity from '../song/SongEntity';

export default interface PlaylistEntity {
  playlistId: string;
  name: string;
  songs: SongEntity[];
}
