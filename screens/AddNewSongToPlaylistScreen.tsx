import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddToPlaylistSongFormContainer from '../domain/song/AddToPlaylistSongFormContainer';

interface AddNewSongToPlaylistScreenProps {}

const AddNewSongToPlaylistScreen: React.FC<AddNewSongToPlaylistScreenProps> = ({}) => {
  return <AddToPlaylistSongFormContainer />;
};

export default withBottomRoundedCorners(
  withBackground(AddNewSongToPlaylistScreen)
);
