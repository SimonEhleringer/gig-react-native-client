import React from 'react';
import PlaylistModel from './PlaylistModel';
import Playlist from './Playlist';

interface PlaylistContainerProps {
  playlist: PlaylistModel;
}

const PlaylistContainer: React.FC<PlaylistContainerProps> = ({ playlist }) => {
  return <Playlist playlist={playlist} />;
};

export default PlaylistContainer;
