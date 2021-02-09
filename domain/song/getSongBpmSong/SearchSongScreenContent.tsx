import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SongsStackParamList } from '../../../navigation/SongsStack';
import withBackground from '../../common/withBackground';
import withBottomRoundedCorners from '../../common/withBottomRoundedCorners';
import GetSongBpmSongListContainer from './GetSongBpmSongListContainer';

interface SearchSongScreenContentProps {
  navigation: StackNavigationProp<SongsStackParamList, 'SearchSong'>;
}

const SearchSongScreenContent: React.FC<SearchSongScreenContentProps> = ({
  navigation,
}) => {
  return <GetSongBpmSongListContainer navigation={navigation} />;
};

export default withBottomRoundedCorners(
  withBackground(SearchSongScreenContent)
);