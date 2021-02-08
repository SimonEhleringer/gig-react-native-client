import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { SongsStackParamList } from '../../../navigation/SongsStack';
import GetSongBpmSongList from './GetSongBpmSongList';

interface GetSongBpmSongListContainerProps {
  navigation: StackNavigationProp<SongsStackParamList, 'SearchSong'>;
}

const GetSongBpmSongListContainer: React.FC<GetSongBpmSongListContainerProps> = ({
  navigation,
}) => {
  const state = useSelector((state: ReduxState) => state.getSongBpmSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  let errors = state.errors;
  const loading = state.loading;

  const handleSongPress = (id: string) => {
    navigation.navigate('AddSong', { id });
  };

  const handleDummySongPress = () => {
    navigation.navigate('AddSong');
  };

  return (
    <GetSongBpmSongList
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      errors={errors}
      handleSongPress={handleSongPress}
      handleDummySongPress={handleDummySongPress}
    />
  );
};

export default GetSongBpmSongListContainer;
