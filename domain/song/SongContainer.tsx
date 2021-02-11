import React, { useState, useEffect, useRef } from 'react';
import Song from './Song';
import SongEntity from './SongEntity';
import { Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import RBSheet from 'react-native-raw-bottom-sheet';

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
    />
  );
};

export default SongContainer;
