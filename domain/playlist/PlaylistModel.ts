import SongModel from '../song/SongEntity';

export default interface PlaylistModel {
  PlaylistId?: number;
  Name: string;
  Songs: SongModel[];
}
