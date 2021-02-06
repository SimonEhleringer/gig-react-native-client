export interface GetSongBpmSearchSongResponse {
  search: GetSongBpmSongResponse[] | GetSongBpmErrorResponse;
}

export interface GetSongBpmSongResponse {
  title: string;
  artist: GetSongBpmArtistReponse;
  tempo: number;
}

export interface GetSongBpmArtistReponse {
  name: string;
}

export interface GetSongBpmErrorResponse {
  error: string;
}

export const isGetSongBpmErrorResponse = (
  response: GetSongBpmSongResponse[] | GetSongBpmErrorResponse
): response is GetSongBpmErrorResponse => {
  return (response as GetSongBpmErrorResponse).error !== undefined;
};
