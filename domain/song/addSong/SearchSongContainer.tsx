import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useTheme } from '../../../hooks/useTheme';
import { SongsStackParamList } from '../../../navigation/SongsStack';
import withBackground from '../../common/withBackground';
import { searchSongs } from './addSongSlice';
import SearchSong from './SearchSong';

interface SearchSongContainerProps {
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
}

const SearchSongContainer: React.FC<SearchSongContainerProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleSearch = (newSearch: string) => {
    setSearch(newSearch);

    //if (newSearch.length >= 3) {
    dispatch(searchSongs(newSearch));
    //}
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SearchSong
      theme={theme}
      handleSearch={handleSearch}
      handleGoBack={handleGoBack}
    />
  );
};

export default SearchSongContainer;
