import React from 'react';
import PlaylistSong from './PlaylistSong';
import SongEntity from './SongEntity';

interface PlaylistSongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const PlaylistSongContainer: React.FC<PlaylistSongContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
}) => {
  const handleChevronPress = () => {
    alert('Hiii');
  };

  return (
    <PlaylistSong
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
    />
  );
};

export default PlaylistSongContainer;
