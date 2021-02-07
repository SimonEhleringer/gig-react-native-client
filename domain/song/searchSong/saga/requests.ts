import { AxiosResponse } from 'axios';
import getSongBpmApi from '../../../../config/getSongBpmApi';
import { GetSongBpmSearchSongResponse } from './shared';

export const requestSearchSongs = async (search: string) => {
  const response: AxiosResponse<GetSongBpmSearchSongResponse> = await getSongBpmApi.get(
    '/',
    {
      params: {
        type: 'song',
        lookup: search,
      },
    }
  );

  return response;
};
