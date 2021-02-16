import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddSongFormContainer from '../domain/song/AddSongFormContainer';
import { SongsStackParamList } from '../navigation/SongsStack';

interface AddSongScreenProps {
  route: RouteProp<SongsStackParamList, 'AddSong'>;
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
}

const AddSongScreen: React.FC<AddSongScreenProps> = ({ route, navigation }) => {
  return <AddSongFormContainer id={route.params?.id} />;
};

export default withBottomRoundedCorners(withBackground(AddSongScreen));
