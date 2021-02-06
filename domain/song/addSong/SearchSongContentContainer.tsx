import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import SearchSongContent from './SearchSongContent';

interface SearchSongContentContainerProps {}

const SearchSongContentContainer: React.FC<SearchSongContentContainerProps> = ({}) => {
  const state = useSelector((state: ReduxState) => state.addSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  const loading = state.loading;
  const errors = state.errors;

  return (
    <SearchSongContent
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      errors={errors}
    />
  );
};

export default SearchSongContentContainer;
