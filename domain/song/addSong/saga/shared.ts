export interface GetSongBpmSearchSongResponse {
  search: GetSongBpmSongResponse[];
}

export interface GetSongBpmSongResponse {
  title: string;
  artist: GetSongBpmArtistReponse;
  tempo: number;
}

export interface GetSongBpmArtistReponse {
  name: string;
}
