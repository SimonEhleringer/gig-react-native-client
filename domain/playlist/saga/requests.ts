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

export const requestUpdatePlaylist = async (
  playlistId: string,
  request: CreateUpdatePlaylistRequest
) => {
  const response: AxiosResponse<PlaylistResponse> = await api.put(
    `Playlists/${playlistId}`,
    { ...request }
  );

  return response;
};

export const requestDeletePlaylist = async (playlistId: string) => {
  const response: AxiosResponse = await api.delete(`Playlists/${playlistId}`);

  return response;
};
