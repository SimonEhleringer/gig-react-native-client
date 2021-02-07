import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import GetSongBpmSongList from './GetSongBpmSongList';

interface GetSongBpmSongListContainerProps {}

const GetSongBpmSongListContainer: React.FC<GetSongBpmSongListContainerProps> = ({}) => {
  const state = useSelector((state: ReduxState) => state.addSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  const loading = state.loading;
  const errors = state.errors;

  return (
    <GetSongBpmSongList
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      errors={errors}
    />
  );
};

export default GetSongBpmSongListContainer;
