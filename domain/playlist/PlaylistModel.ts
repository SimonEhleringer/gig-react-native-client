import SongModel from '../song/SongModel';

export default interface PlaylistModel {
  PlaylistId?: number;
  Name: string;
  Songs: SongModel[];
}
