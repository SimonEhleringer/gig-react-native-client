import React, { useEffect, useRef, useState } from 'react';
import SongList from './SongWithBottomSheetList';
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from './slice';
import { ReduxState } from '../../config/store';
import StoreFetchingSongList from './StoreFetchingSongList';

interface StoreFetchingSongListContainerProps {}

const StoreFetchingSongListContainer: React.FC<StoreFetchingSongListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);

  const { loading, errors, songs } = state;

  return (
    <StoreFetchingSongList songs={songs} loading={loading} errors={errors} />
  );
};

export default StoreFetchingSongListContainer;
