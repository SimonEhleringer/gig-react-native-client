export interface GetSongBpmSearchSongResponse {
  search: GetSongBpmSearchedSongResponse[] | GetSongBpmErrorResponse;
}

export interface GetSongBpmSearchedSongResponse {
  id: string;
  title: string;
  artist: GetSongBpmArtistReponse;
}

export interface GetSongBpmArtistReponse {
  name: string;
}

export interface GetSongBpmErrorResponse {
  error: string;
}

export interface GetSongBpmSongWrapperResponse {
  song: GetSongBpmSongResponse;
}

export interface GetSongBpmSongResponse {
  id: string;
  title: string;
  artist: GetSongBpmArtistReponse;
  tempo: number;
}

export const isGetSongBpmErrorResponse = (
  response: GetSongBpmSearchedSongResponse[] | GetSongBpmErrorResponse
): response is GetSongBpmErrorResponse => {
  return (response as GetSongBpmErrorResponse).error !== undefined;
};
