import React from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import GetSongBpmSongListForAddingToPlaylistContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListForAddingToPlaylistContainer';

interface SearchSongForAddingToPlaylistScreenProps {}

const SearchSongForAddingToPlaylistScreen: React.FC<SearchSongForAddingToPlaylistScreenProps> = ({}) => {
  return <GetSongBpmSongListForAddingToPlaylistContainer />;
};

export default withBottomRoundedCorners(
  withBackground(SearchSongForAddingToPlaylistScreen)
);
