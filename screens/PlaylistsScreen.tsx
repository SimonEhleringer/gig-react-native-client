import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import StoreFetchingPlaylistListContainer from '../domain/playlist/StoreFetchingPlaylistListContainer';

interface PlaylistsScreenProps {}

const PlaylistsScreen: React.FC<PlaylistsScreenProps> = ({}) => {
  return <StoreFetchingPlaylistListContainer />;
};

export default withBottomRoundedCorners(withBackground(PlaylistsScreen));
