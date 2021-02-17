import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import AddPlaylistSong from './AddPlaylistSong';
import SongEntity from './SongEntity';

interface AddPlaylistSongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const AddPlaylistSongContainer: React.FC<AddPlaylistSongContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
}) => {
  const theme = useTheme();

  const handleListItemPress = () => {
    alert('hii');
  };

  return (
    <AddPlaylistSong
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleListItemPress={handleListItemPress}
    />
  );
};

export default AddPlaylistSongContainer;
