import React, { useEffect, useRef, useState } from 'react';
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from './slice';
import { ReduxState } from '../../config/store';

interface SongListContainerProps {}

const SongListContainer: React.FC<SongListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);

  const { loading, errors, songs } = state;

  return <SongList songs={songs} loading={loading} errors={errors} />;
};

export default SongListContainer;
