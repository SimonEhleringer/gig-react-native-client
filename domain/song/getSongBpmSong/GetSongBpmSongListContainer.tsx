import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import GetSongBpmSongList from './GetSongBpmSongList';

interface GetSongBpmSongListContainerProps {
  handleSongPress: (id: string) => void;
  handleDummySongPress: () => void;
}

const GetSongBpmSongListContainer: React.FC<GetSongBpmSongListContainerProps> = ({
  handleSongPress,
  handleDummySongPress,
}) => {
  const state = useSelector((state: ReduxState) => state.getSongBpmSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  const loading = state.loading;

  return (
    <GetSongBpmSongList
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      handleSongPress={handleSongPress}
      handleDummySongPress={handleDummySongPress}
    />
  );
};

export default GetSongBpmSongListContainer;
