import React from 'react';
import PlaylistEntity from './PlaylistModel';
import Playlist from './Playlist';
import { useTheme } from '../../hooks/useTheme';

interface PlaylistContainerProps {
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
}

const PlaylistContainer: React.FC<PlaylistContainerProps> = ({
  playlist,
  isFirstItem,
  isLastItem,
  handleChevronPress,
}) => {
  const theme = useTheme();

  return (
    <Playlist
      theme={theme}
      playlist={playlist}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
    />
  );
};

export default PlaylistContainer;
