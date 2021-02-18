import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { PlaylistStackParamList } from '../../../navigation/PlaylistStack';
import GetSongBpmSongListContainer from './GetSongBpmSongListContainer';

interface GetSongBpmSongListForAddingToPlaylistContainerProps {}

const GetSongBpmSongListForAddingToPlaylistContainer: React.FC<GetSongBpmSongListForAddingToPlaylistContainerProps> = ({}) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'SearchSong'
  > = useNavigation();

  const handleDummySongPress = () => {};

  const handleSongPress = (id: string) => {};

  return (
    <GetSongBpmSongListContainer
      handleDummySongPress={handleDummySongPress}
      handleSongPress={handleSongPress}
    />
  );
};

export default GetSongBpmSongListForAddingToPlaylistContainer;
