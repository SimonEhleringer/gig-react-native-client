import React from 'react';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddToPlaylistSongFormContainer from '../domain/playlist/playlistSong/addSongToPlaylist/form/AddToPlaylistSongFormContainer';

interface AddNewSongToPlaylistScreenProps {}

const AddNewSongToPlaylistScreen: React.FC<AddNewSongToPlaylistScreenProps> = ({}) => {
  return <AddToPlaylistSongFormContainer />;
};

export default withBottomRoundedCorners(
  withBackground(AddNewSongToPlaylistScreen)
);
