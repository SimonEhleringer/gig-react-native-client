import React, { useEffect, useRef, useState } from 'react';
import SongList from './SongWithBottomSheetList';
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from './slice';
import { ReduxState } from '../../config/store';
import StoreFetchingSongList from './StoreFetchingSongList';
import { useNetInfo } from '@react-native-community/netinfo';
import { useOnUpdateEffect } from '../../hooks/useOnUpdateEffect';
import { StackNavigationProp } from '@react-navigation/stack';
import { SongsStackParamList } from '../../navigation/SongsStack';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

interface StoreFetchingSongListContainerProps {}

const StoreFetchingSongListContainer: React.FC<StoreFetchingSongListContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'Songs'
  > = useNavigation();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);

  const { loading, errors, songs } = state;

  useOnUpdateEffect(() => {
    const getIsFocused = (): boolean => navigation.isFocused();

    if (errors.length > 0 && getIsFocused()) {
      Alert.alert('Fehler', errors.join('\n'));
    }
  }, [errors]);

  return <StoreFetchingSongList songs={songs} loading={loading} />;
};

export default StoreFetchingSongListContainer;
