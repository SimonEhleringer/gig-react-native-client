import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import {
  AddUpdateSongParams,
  SongsStackParamList,
} from '../../navigation/SongsStack';
import { deleteSong } from './slice';
import SongEntity from './SongEntity';
import SongWithBottomSheet from './SongWithBottomSheet';

interface SongWithBottomSheetContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const SongWithBottomSheetContainer: React.FC<SongWithBottomSheetContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'Songs'
  > = useNavigation();
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  const bottomSheetRef = useRef<RBSheet>(null);

  const handleBottomSheetEdit = () => {
    bottomSheetRef.current?.close();

    const params: AddUpdateSongParams = {
      id: song.songId,
    };

    navigation.navigate('UpdateSong', params);
  };

  const handleBottomSheetDelete = () => {
    bottomSheetRef.current?.close();

    dispatch(deleteSong(song.songId));
  };

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

  return (
    <SongWithBottomSheet
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      bottomSheetRef={bottomSheetRef}
      handleBottomSheetEdit={handleBottomSheetEdit}
      handleBottomSheetDelete={handleBottomSheetDelete}
      handleChevronPress={handleChevronPress}
      netInfo={netInfo}
    />
  );
};

export default SongWithBottomSheetContainer;
