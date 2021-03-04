import React, { useState, useEffect } from 'react';
import Song from './Song';
import SongEntity from './SongEntity';
import { Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';

interface SongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
}

const SongContainer: React.FC<SongContainerProps> = ({
  song,
  isLastItem,
  isFirstItem,
  handleChevronPress,
}) => {
  const theme = useTheme();

  const [animatePress] = useState(new Animated.Value(0));
  const [areNotesCollapsed, setAreNotesCollapsed] = useState(true);

  // const state = useSelector((state: ReduxState) => state.playlist);
  // const isMetronomeOn = state.isGigModeActive;

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

  return (
    <Song
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      areNotesCollapsed={areNotesCollapsed}
      rotation={rotation}
      handleListItemPress={handleListItemPress}
      handleChevronPress={handleChevronPress}
      // isMetronomeOn={isMetronomeOn}
    />
  );
};

export default SongContainer;
