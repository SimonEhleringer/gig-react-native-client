import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import { CreateUpdateSongRequest, SongResponse } from './shared';

export const requestLoadSongs = async (jwtToken: string) => {
  const response: AxiosResponse<SongResponse[]> = await api.get('Songs', {
    // headers: {
    //   authorization: `bearer ${jwtToken}`,
    // },
  });

  return response;
};

export const requestCreateSong = async (request: CreateUpdateSongRequest) => {
  const response: AxiosResponse<SongResponse> = await api.post('Songs', {
    ...request,
  });

  return response;
};
