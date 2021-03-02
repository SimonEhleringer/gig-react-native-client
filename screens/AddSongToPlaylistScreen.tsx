import React from 'react';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddPlaylistSongListContainer from '../domain/playlist/playlistSong/addSongToPlaylist/AddPlaylistSongListContainer';

interface AddSongToPlaylistScreenProps {}

const AddSongToPlaylistScreen: React.FC<AddSongToPlaylistScreenProps> = ({}) => {
  return (
    <GreyBackgroundView>
      <AddPlaylistSongListContainer />
    </GreyBackgroundView>
  );
};

export default withBottomRoundedCorners(
  withBackground(AddSongToPlaylistScreen)
);
