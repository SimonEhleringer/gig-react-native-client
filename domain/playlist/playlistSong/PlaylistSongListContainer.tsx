import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useOnUpdateEffect } from '../../../hooks/useOnUpdateEffect';
import { PlaylistStackParamList } from '../../../navigation/PlaylistStack';
import PlaylistSongList from './PlaylistSongList';

interface PlaylistSongListContainerProps {
  playlistId: string;
}

const PlaylistSongListContainer: React.FC<PlaylistSongListContainerProps> = ({
  playlistId,
}) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'PlaylistSongs'
  > = useNavigation();

  const state = useSelector((state: ReduxState) => state.playlist);
  const songs = state.playlists.find((value) => value.playlistId === playlistId)
    ?.songs;

  const { loading, errors } = state;

  useOnUpdateEffect(() => {
    const getIsFocused = (): boolean => navigation.isFocused();

    if (errors.length > 0 && getIsFocused()) {
      Alert.alert('Fehler', errors.join('\n'));
    }
  }, [errors]);

  return <>{songs && <PlaylistSongList songs={songs} loading={loading} />}</>;
};

export default PlaylistSongListContainer;
