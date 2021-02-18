import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { PlaylistStackParamList } from '../../navigation/PlaylistStack';
import AddPlaylistSongList from './AddPlaylistSongList';
import { loadSongs } from './slice';

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

  const state = useSelector((state: ReduxState) => state.song);
  const { loading, errors, songs } = state;

  const handleDummySongPress = () => {
    navigation.navigate('SearchSong', { playlistId: route.params.playlistId });
  };

  return (
    <AddPlaylistSongList
      songs={songs}
      loading={loading}
      errors={errors}
      handleDummySongPress={handleDummySongPress}
    />
  );
};

export default AddPlaylistSongListContainer;
