import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SongsStackParamList } from '../../../navigation/SongsStack';
import GetSongBpmSongListContainer from './GetSongBpmSongListContainer';

interface CreateSongGetSongBpmSongListContainerProps {}

const CreateSongGetSongBpmSongListContainer: React.FC<CreateSongGetSongBpmSongListContainerProps> = ({}) => {
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'SearchSong'
  > = useNavigation();

  const handleSongPress = (id: string) => {
    navigation.navigate('AddSong', { id });
  };

  const handleDummySongPress = () => {
    navigation.navigate('AddSong');
  };

  return (
    <GetSongBpmSongListContainer
      handleDummySongPress={handleDummySongPress}
      handleSongPress={handleSongPress}
    />
  );
};

export default CreateSongGetSongBpmSongListContainer;
