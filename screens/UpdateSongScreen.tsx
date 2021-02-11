import { RouteProp } from '@react-navigation/native';
import React from 'react';
import UpdateSongFormContainer from '../domain/song/UpdateSongFormContainer';
import { SongsStackParamList } from '../navigation/SongsStack';

interface UpdateSongScreenProps {
  route: RouteProp<SongsStackParamList, 'UpdateSong'>;
}

const UpdateSongScreen: React.FC<UpdateSongScreenProps> = ({ route }) => {
  return <UpdateSongFormContainer songId={route.params?.id} />;
};

export default UpdateSongScreen;
