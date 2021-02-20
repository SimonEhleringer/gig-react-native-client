import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  AddNewSongToPlaylistParams,
  PlaylistStackParamList,
} from '../../../../navigation/PlaylistStack';
import GetSongBpmSongListContainer from '../../../song/getSongBpmSong/GetSongBpmSongListContainer';

interface GetSongBpmSongListForAddingToPlaylistContainerProps {}

const GetSongBpmSongListForAddingToPlaylistContainer: React.FC<GetSongBpmSongListForAddingToPlaylistContainerProps> = ({}) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'SearchSong'
  > = useNavigation();

  const route: RouteProp<PlaylistStackParamList, 'SearchSong'> = useRoute();

  const handleDummySongPress = () => {
    const params: AddNewSongToPlaylistParams = {
      playlistId: route.params.playlistId,
    };

    navigation.navigate('AddNewSongToPlaylist', params);
  };

  const handleSongPress = (id: string) => {
    const params: AddNewSongToPlaylistParams = {
      playlistId: route.params.playlistId,
      getSongBpmSongId: id,
    };

    navigation.navigate('AddNewSongToPlaylist', params);
  };

  return (
    <GetSongBpmSongListContainer
      handleDummySongPress={handleDummySongPress}
      handleSongPress={handleSongPress}
    />
  );
};

export default GetSongBpmSongListForAddingToPlaylistContainer;
