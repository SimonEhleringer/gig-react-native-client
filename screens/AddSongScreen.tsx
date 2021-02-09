import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddSongContainer from '../domain/song/AddSongContainer';
import { SongsStackParamList } from '../navigation/SongsStack';

interface AddSongScreenProps {
  route: RouteProp<SongsStackParamList, 'AddSong'>;
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
}

const AddSongScreen: React.FC<AddSongScreenProps> = ({ route, navigation }) => {
  return <AddSongContainer navigation={navigation} id={route.params?.id} />;
};

export default withBottomRoundedCorners(withBackground(AddSongScreen));