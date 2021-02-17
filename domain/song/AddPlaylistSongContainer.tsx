import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import {
  AddSongToPlaylistParams,
  PlaylistStackParamList,
} from '../../navigation/PlaylistStack';
import {
  addSongToPlaylist,
  AddSongToPlaylistPayload,
  playlistActionSucceeded,
} from '../playlist/slice';
import AddPlaylistSong from './AddPlaylistSong';
import SongEntity from './SongEntity';

interface AddPlaylistSongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const AddPlaylistSongContainer: React.FC<AddPlaylistSongContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'AddSongToPlaylist'
  > = useNavigation();
  const route: RouteProp<
    PlaylistStackParamList,
    'AddSongToPlaylist'
  > = useRoute();

  const handleListItemPress = () => {
    const payload: AddSongToPlaylistPayload = {
      playlistId: route.params.playlistId,
      songId: song.songId,
    };

    dispatch(addSongToPlaylist(payload));

    const params: AddSongToPlaylistParams = {
      playlistId: route.params.playlistId,
    };

    navigation.navigate('PlaylistSongs', params);
  };

  return (
    <AddPlaylistSong
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleListItemPress={handleListItemPress}
    />
  );
};

export default AddPlaylistSongContainer;
