import { AxiosResponse } from 'axios';
import getSongBpmApi, { API_KEY } from '../../../../config/getSongBpmApi';
import {
  GetSongBpmSearchSongResponse,
  GetSongBpmSongWrapperResponse,
} from './shared';

export const requestSearchSongs = async (search: string) => {
  const response: AxiosResponse<GetSongBpmSearchSongResponse> = await getSongBpmApi.get(
    `/search/?api_key=${API_KEY}`,
    {
      params: {
        type: 'song',
        lookup: search,
      },
    }
  );

  return response;
};

export const requestSong = async (id: string) => {
  const response: AxiosResponse<GetSongBpmSongWrapperResponse> = await getSongBpmApi.get(
    `song/?api_key=${API_KEY}`,
    {
      params: {
        id,
      },
    }
  );

  return response;
};
