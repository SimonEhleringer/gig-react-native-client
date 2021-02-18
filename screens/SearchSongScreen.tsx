import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SongsStackParamList } from '../navigation/SongsStack';
import GetSongBpmSongListContainer from '../domain/song/getSongBpmSong/GetSongBpmSongListContainer';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import withBackground from '../domain/common/withBackground';
import CreateSongGetSongBpmSongListContainer from '../domain/song/getSongBpmSong/CreateSongGetSongBpmSongListContainer';

interface SearchSongScreenProps {}

const SearchSongScreen: React.FC<SearchSongScreenProps> = ({}) => {
  return <CreateSongGetSongBpmSongListContainer />;
};

export default withBottomRoundedCorners(withBackground(SearchSongScreen));
