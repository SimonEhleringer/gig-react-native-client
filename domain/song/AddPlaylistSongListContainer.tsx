import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import AddPlaylistSongList from './AddPlaylistSongList';
import { loadSongs } from './slice';

interface AddPlaylistSongListContainerProps {}

const AddPlaylistSongListContainer: React.FC<AddPlaylistSongListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);
  const { loading, errors, songs } = state;

  return (
    <AddPlaylistSongList songs={songs} loading={loading} errors={errors} />
  );
};

export default AddPlaylistSongListContainer;
