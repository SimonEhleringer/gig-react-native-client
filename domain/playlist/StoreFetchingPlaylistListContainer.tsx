import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useTheme } from '../../hooks/useTheme';
import {
  PlaylistStackParamList,
  UpdatePlaylistParams,
} from '../../navigation/PlaylistStack';
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
