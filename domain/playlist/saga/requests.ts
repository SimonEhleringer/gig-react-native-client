import { AxiosResponse } from 'axios';
import api from '../../../config/api';
import { CreateUpdatePlaylistRequest, PlaylistResponse } from './shared';

export const requestLoadPlaylists = async () => {
  const response: AxiosResponse<PlaylistResponse[]> = await api.get(
    'Playlists'
  );

  return response;
};

export const requestCreatePlaylist = async (
  request: CreateUpdatePlaylistRequest
) => {
  const response: AxiosResponse<PlaylistResponse> = await api.post(
    'Playlists',
    request
  );

  return response;
};
