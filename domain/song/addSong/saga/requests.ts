import { AxiosResponse } from 'axios';
import getSongBpmApi from '../../../../config/getSongBpmApi';
import { GetSongBpmSearchSongResponse } from './shared';

export const requestSearchSongs = async (search: string) => {
  const convertedSearch = search.replace(/\s+/g, '+');

  console.log(convertedSearch);

  // console.log(getSongBpmApi.)
  // const lol = await getSongBpmApi.get(`type=song&lookup=${convertedSearch}`);
  // console.log(lol);

  const response: AxiosResponse<GetSongBpmSearchSongResponse> = await getSongBpmApi.get(
    '/',
    {
      params: {
        type: 'song',
        lookup: convertedSearch,
      },
    }
  );

  return response;
};
