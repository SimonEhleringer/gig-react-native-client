import React, { useEffect } from 'react';
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from './songSlice';
import { ReduxState } from '../../config/store';

interface SongListContainerProps {}

const SongListContainer: React.FC<SongListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);
  const songs = state.songs;

  return <SongList songs={songs} />;
};

export default SongListContainer;
