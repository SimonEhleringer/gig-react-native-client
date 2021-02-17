import { RouteProp } from '@react-navigation/native';
import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import UpdatePlaylistFormContainer from '../domain/playlist/UpdatePlaylistFormContainer';
import { PlaylistStackParamList } from '../navigation/PlaylistStack';

interface UpdatePlaylistScreenProps {
  route: RouteProp<PlaylistStackParamList, 'UpdatePlaylist'>;
}

const UpdatePlaylistScreen: React.FC<UpdatePlaylistScreenProps> = ({
  route,
}) => {
  return <UpdatePlaylistFormContainer playlistId={route.params.playlistId} />;
};

export default withBottomRoundedCorners(withBackground(UpdatePlaylistScreen));
