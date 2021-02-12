import React, { useState, useEffect, useRef } from 'react';
import Song from './Song';
import SongEntity from './SongEntity';
import { Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  AddUpdateSongParams,
  SongsStackParamList,
} from '../../navigation/SongsStack';
import { useNavigation } from '@react-navigation/native';
import { deleteSong } from './slice';

interface SongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const SongContainer: React.FC<SongContainerProps> = ({
  song,
  isLastItem,
  isFirstItem,
}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'Songs'
  > = useNavigation();
  const dispatch = useDispatch();

  const [animatePress] = useState(new Animated.Value(0));
  const [areNotesCollapsed, setAreNotesCollapsed] = useState(true);

  const bottomSheetRef = useRef<RBSheet>(null);

  useEffect(() => {
    Animated.timing(animatePress, {
      toValue: areNotesCollapsed ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  });

  const rotation = animatePress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const handleListItemPress = () => {
    setAreNotesCollapsed(!areNotesCollapsed);
  };

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

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

  return (
    <Song
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      areNotesCollapsed={areNotesCollapsed}
      rotation={rotation}
      bottomSheetRef={bottomSheetRef}
      handleListItemPress={handleListItemPress}
      handleChevronPress={handleChevronPress}
      handleBottomSheetEdit={handleBottomSheetEdit}
      handleBottomSheetDelete={handleBottomSheetDelete}
    />
  );
};

export default SongContainer;
