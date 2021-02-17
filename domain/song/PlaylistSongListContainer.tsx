import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import PlaylistSongList from './PlaylistSongList';

interface PlaylistSongListContainerProps {
  playlistId: string;
}

const PlaylistSongListContainer: React.FC<PlaylistSongListContainerProps> = ({
  playlistId,
}) => {
  const state = useSelector((state: ReduxState) => state.playlist);
  const songs = state.playlists.find((value) => value.playlistId === playlistId)
    ?.songs;

  return <>{songs && <PlaylistSongList songs={songs} />}</>;
};

export default PlaylistSongListContainer;
