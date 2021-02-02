import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import SongListContainer from '../domain/song/SongListContainer';

interface SongsScreenProps {}

const SongsScreen: React.FC<SongsScreenProps> = ({}) => {
  return <SongListContainer />;
};

export default withBottomRoundedCorners(withBackground(SongsScreen));
