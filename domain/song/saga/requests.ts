import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import { SongResponse } from './shared';

export const requestLoadSongs = async (jwtToken: string) => {
  const response: AxiosResponse<SongResponse[]> = await api.get('Songs', {
    headers: {
      authorization: `bearer ${jwtToken}`,
    },
  });

  return response;
};
