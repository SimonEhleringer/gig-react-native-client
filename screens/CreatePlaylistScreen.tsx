import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import CreatePlaylistFormContainer from '../domain/playlist/form/CreatePlaylistFormContainer';

interface CreatePlaylistScreenProps {}

const CreatePlaylistScreen: React.FC<CreatePlaylistScreenProps> = ({}) => {
  return <CreatePlaylistFormContainer />;
};

export default withBottomRoundedCorners(withBackground(CreatePlaylistScreen));
