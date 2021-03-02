import React from 'react';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import GetSongBpmSongListForAddingToPlaylistContainer from '../domain/playlist/playlistSong/addSongToPlaylist/GetSongBpmSongListForAddingToPlaylistContainer';

interface SearchSongForAddingToPlaylistScreenProps {}

const SearchSongForAddingToPlaylistScreen: React.FC<SearchSongForAddingToPlaylistScreenProps> = ({}) => {
  return (
    <GreyBackgroundView>
      <GetSongBpmSongListForAddingToPlaylistContainer />
    </GreyBackgroundView>
  );
};

export default withBottomRoundedCorners(SearchSongForAddingToPlaylistScreen);
