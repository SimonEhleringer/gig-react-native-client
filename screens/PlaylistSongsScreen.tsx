import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ReduxState } from '../config/store';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import PlaylistSongListContainer from '../domain/song/PlaylistSongListContainer';
import { PlaylistStackParamList } from '../navigation/PlaylistStack';

interface PlaylistSongsScreenProps {
  route: RouteProp<PlaylistStackParamList, 'PlaylistSongs'>;
}

const PlaylistSongsScreen: React.FC<PlaylistSongsScreenProps> = ({ route }) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'PlaylistSongs'
  > = useNavigation();

  const state = useSelector((state: ReduxState) => state.playlist);
  const playlist = state.playlists.find(
    (value) => value.playlistId === route.params.playlistId
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: playlist?.name });
  });

  return <PlaylistSongListContainer playlistId={route.params.playlistId} />;
};

export default withBottomRoundedCorners(withBackground(PlaylistSongsScreen));
