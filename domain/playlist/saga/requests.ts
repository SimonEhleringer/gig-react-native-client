import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import { PlaylistResponse } from './shared';

export const requestLoadPlaylists = async () => {
  const response: AxiosResponse<PlaylistResponse[]> = await api.get(
    'Playlists'
  );

  return response;
};
