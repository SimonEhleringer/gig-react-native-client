import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { loadPlaylists } from './slice';
import StoreFetchingPlaylistList from './StoreFetchingPlaylistList';

interface StoreFetchingPlaylistListContainerProps {}

const StoreFetchingPlaylistListContainer: React.FC<StoreFetchingPlaylistListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaylists());
  }, []);

  const state = useSelector((state: ReduxState) => state.playlist);

  const { loading, errors, playlists } = state;

  return (
    <StoreFetchingPlaylistList
      loading={loading}
      errors={errors}
      playlists={playlists}
    />
  );
};

export default StoreFetchingPlaylistListContainer;
