import React from 'react';
import PlaylistEntity from './PlaylistModel';
import Playlist from './Playlist';
import { useTheme } from '../../hooks/useTheme';

interface PlaylistContainerProps {
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
  handlePlaylistPress: () => void;
}

const PlaylistContainer: React.FC<PlaylistContainerProps> = ({
  playlist,
  isFirstItem,
  isLastItem,
  handleChevronPress,
  handlePlaylistPress,
}) => {
  const theme = useTheme();

  return (
    <Playlist
      theme={theme}
      playlist={playlist}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
      handlePlaylistPress={handlePlaylistPress}
    />
  );
};

export default PlaylistContainer;
