import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useOnUpdateEffect } from '../../hooks/useOnUpdateEffect';
import { useTheme } from '../../hooks/useTheme';
import {
  PlaylistStackParamList,
  UpdatePlaylistParams,
} from '../../navigation/PlaylistStack';
import PlaylistEntity from './PlaylistModel';
import { loadPlaylists } from './slice';
import StoreFetchingPlaylistList from './StoreFetchingPlaylistList';

interface StoreFetchingPlaylistListContainerProps {}

const StoreFetchingPlaylistListContainer: React.FC<StoreFetchingPlaylistListContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  // This state is set true in useEffect. It prevents rendering the flatlist with the state from redux-persist
  // The problem is, that the React-Native Flatlist is rendering async. If state gets updated, while rendering is not finished
  // a warning appears
  const [shouldFlatlistRender, setShouldFlatlistRender] = useState(false);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isInternetReachable) {
        dispatch(loadPlaylists());
      }
    });

    setShouldFlatlistRender(true);

    return () => {
      unsubscribeNetInfo();
    };

    // if (netInfo.isInternetReachable) {
    //   dispatch(loadPlaylists());
    // }
  }, []);

  const state = useSelector((state: ReduxState) => state.playlist);

  const { loading, errors, playlists } = state;

  return (
    <>
      {shouldFlatlistRender && (
        <StoreFetchingPlaylistList
          loading={loading}
          errors={errors}
          playlists={playlists}
        />
      )}
    </>
  );
};

export default StoreFetchingPlaylistListContainer;
