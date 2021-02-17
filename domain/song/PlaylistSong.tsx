import React from 'react';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';

interface PlaylistSongProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
}

const PlaylistSong: React.FC<PlaylistSongProps> = ({
  song,
  isFirstItem,
  isLastItem,
  handleChevronPress,
}) => {
  return (
    <SongContainer
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
    />
  );
};

export default PlaylistSong;
