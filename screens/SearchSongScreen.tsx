import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SongsStackParamList } from '../navigation/SongsStack';
import GetSongBpmSongListContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListContainer';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import withBackground from '../domain/common/withBackground';
import GetSongBpmSongListForCreatingSongContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListForCreatingSongContainer';

interface SearchSongScreenProps {}

const SearchSongScreen: React.FC<SearchSongScreenProps> = ({}) => {
  return <GetSongBpmSongListForCreatingSongContainer />;
};

export default withBottomRoundedCorners(withBackground(SearchSongScreen));
