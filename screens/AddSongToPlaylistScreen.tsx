import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AddPlaylistSongListContainer from '../domain/song/AddPlaylistSongListContainer';
import StoreFetchingSongListContainer from '../domain/song/StoreFetchingSongListContainer';

interface AddSongToPlaylistScreenProps {}

const AddSongToPlaylistScreen: React.FC<AddSongToPlaylistScreenProps> = ({}) => {
  return <AddPlaylistSongListContainer />;
};

export default withBottomRoundedCorners(
  withBackground(AddSongToPlaylistScreen)
);
