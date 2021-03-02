import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import GetSongBpmSongList from './GetSongBpmSongList';
import { setGetSongBpmSongs } from './slice';

interface GetSongBpmSongListContainerProps {
  handleSongPress: (id: string) => void;
  handleDummySongPress: () => void;
}

const GetSongBpmSongListContainer: React.FC<GetSongBpmSongListContainerProps> = ({
  handleSongPress,
  handleDummySongPress,
}) => {
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.getSongBpmSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  const loading = state.loading;

  useEffect(() => {
    dispatch(setGetSongBpmSongs([]));
  }, []);

  const handleVisitGetSongBpmPress = () => {
    Linking.openURL('https://getsongbpm.com/');
  };

  return (
    <GetSongBpmSongList
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      handleSongPress={handleSongPress}
      handleDummySongPress={handleDummySongPress}
      handleVisitGetSongBpmPress={handleVisitGetSongBpmPress}
    />
  );
};

export default GetSongBpmSongListContainer;
