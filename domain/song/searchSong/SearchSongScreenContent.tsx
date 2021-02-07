import React from 'react';
import withBackground from '../../common/withBackground';
import withBottomRoundedCorners from '../../common/withBottomRoundedCorners';
import GetSongBpmSongListContainer from './GetSongBpmSongListContainer';

interface SearchSongScreenContentProps {}

const SearchSongScreenContent: React.FC<SearchSongScreenContentProps> = ({}) => {
  return <GetSongBpmSongListContainer />;
};

export default withBottomRoundedCorners(
  withBackground(SearchSongScreenContent)
);
