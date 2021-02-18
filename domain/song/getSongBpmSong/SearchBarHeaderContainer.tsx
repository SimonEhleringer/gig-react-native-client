import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../../hooks/useTheme';
import { SongsStackParamList } from '../../../navigation/SongsStack';
import SearchBarHeader from './SearchBarHeader';
import { searchSongs } from './slice';

interface SearchBarHeaderContainerProps {}

const SearchBarHeaderContainer: React.FC<SearchBarHeaderContainerProps> = ({}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'SearchSong'
  > = useNavigation();

  const handleSearch = (newSearch: string) => {
    if (newSearch.length >= 3) {
      dispatch(searchSongs(newSearch));
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SearchBarHeader
      theme={theme}
      handleGoBack={handleGoBack}
      handleSearch={handleSearch}
    />
  );
};

export default SearchBarHeaderContainer;
