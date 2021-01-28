import React from 'react';
import { View, Text } from 'react-native';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import PlaylistsContainer from '../domain/playlist/PlaylistsContainer';

interface PlaylistsScreenProps {}

const PlaylistsScreen: React.FC<PlaylistsScreenProps> = ({}) => {
  return <PlaylistsContainer />;
};

export default withBottomRoundedCorners(PlaylistsScreen);
