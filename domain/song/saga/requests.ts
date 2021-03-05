import { AxiosResponse } from "axios";
import api from "../../../config/api";
import { CreateUpdateSongRequest, SongResponse } from "./shared";

export const requestLoadSongs = async (jwtToken: string) => {
  const response: AxiosResponse<SongResponse[]> = await api.get("Songs", {
    // headers: {
    //   authorization: `bearer ${jwtToken}`,
    // },
  });

  return response;
};

export const requestCreateSong = async (request: CreateUpdateSongRequest) => {
  const response: AxiosResponse<SongResponse> = await api.post("Songs", {
    ...request,
  });

  return response;
};

export const requestUpdateSong = async (
  songId: string,
  request: CreateUpdateSongRequest
) => {
  const response: AxiosResponse<SongResponse> = await api.put(
    `Songs/${songId}`,
    { ...request }
  );

  return response;
};

export const requestDeleteSong = async (songId: string) => {
  const response: AxiosResponse = await api.delete(`Songs/${songId}`);

  return response;
};
