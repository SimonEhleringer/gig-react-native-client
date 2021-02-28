import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useOnUpdateEffect } from '../../hooks/useOnUpdateEffect';
import { PlaylistStackParamList } from '../../navigation/PlaylistStack';
import { loadPlaylists } from './slice';
import StoreFetchingPlaylistList from './StoreFetchingPlaylistList';

interface StoreFetchingPlaylistListContainerProps {}

const StoreFetchingPlaylistListContainer: React.FC<StoreFetchingPlaylistListContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'Playlists'
  > = useNavigation();

  // This state is set true in useEffect. It prevents rendering the flatlist with the state from redux-persist
  // The problem is, that the React-Native Flatlist is rendering async. If state gets updated, while rendering is not finished
  // a warning appears
  const [shouldFlatlistRender, setShouldFlatlistRender] = useState(false);

  useEffect(() => {
    //if (netInfo.isInternetReachable) {
    dispatch(loadPlaylists());
    //}

    // const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
    //   if (state.isInternetReachable) {
    //     dispatch(loadPlaylists());
    //   }
    // });

    setShouldFlatlistRender(true);

    // return () => {
    //   unsubscribeNetInfo();
    // };
  }, []);

  const state = useSelector((state: ReduxState) => state.playlist);

  const { loading, errors, playlists } = state;

  useOnUpdateEffect(() => {
    const getIsFocused = (): boolean => navigation.isFocused();

    if (errors.length > 0 && getIsFocused()) {
      Alert.alert('Fehler', errors.join('\n'));
    }
  }, [errors]);

  return (
    <>
      {shouldFlatlistRender && (
        <StoreFetchingPlaylistList loading={loading} playlists={playlists} />
      )}
    </>
  );
};

export default StoreFetchingPlaylistListContainer;
