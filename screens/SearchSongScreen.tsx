import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SongsStackParamList } from '../navigation/SongsStack';
import GetSongBpmSongListContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListContainer';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import withBackground from '../domain/common/withBackground';
import GetSongBpmSongListForCreatingSongContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListForCreatingSongContainer';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';

interface SearchSongScreenProps {}

const SearchSongScreen: React.FC<SearchSongScreenProps> = ({}) => {
  return (
    <GreyBackgroundView>
      <GetSongBpmSongListForCreatingSongContainer />
    </GreyBackgroundView>
  );
};

export default withBottomRoundedCorners(SearchSongScreen);
