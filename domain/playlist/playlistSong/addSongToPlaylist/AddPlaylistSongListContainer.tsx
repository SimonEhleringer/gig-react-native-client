import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../config/store';
import { PlaylistStackParamList } from '../../../../navigation/PlaylistStack';
import AddPlaylistSongList from './AddPlaylistSongList';
import { loadSongs } from '../../../song/slice';
import { PlaylistNotFoundError } from '../../saga/shared';
import PlaylistsScreen from '../../../../screens/PlaylistsScreen';

interface AddPlaylistSongListContainerProps {}

const AddPlaylistSongListContainer: React.FC<AddPlaylistSongListContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'AddSongToPlaylist'
  > = useNavigation();
  const route: RouteProp<
    PlaylistStackParamList,
    'AddSongToPlaylist'
  > = useRoute();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const playlist = useSelector(
    (state: ReduxState) => state.playlist
  ).playlists.find(
    (playlist) => playlist.playlistId === route.params.playlistId
  );

  if (!playlist) {
    throw new PlaylistNotFoundError(route.params.playlistId);
  }

  const state = useSelector((state: ReduxState) => state.song);
  const { loading, errors, songs } = state;

  // Get all songIds in playlist
  const playlistSongIds = playlist.songs.map((song) => song.songId);

  // Filter the songs, that are not included in playlist
  const filteredSongs = songs.filter(
    (song) => !playlistSongIds.includes(song.songId)
  );

  const handleDummySongPress = () => {
    navigation.navigate('SearchSong', { playlistId: route.params.playlistId });
  };

  return (
    <AddPlaylistSongList
      songs={filteredSongs}
      loading={loading}
      errors={errors}
      handleDummySongPress={handleDummySongPress}
    />
  );
};

export default AddPlaylistSongListContainer;
