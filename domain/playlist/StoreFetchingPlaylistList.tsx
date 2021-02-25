import React, { useEffect } from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PlaylistWithBottomSheetList from './PlaylistWithBottomSheetList';
import PlaylistEntity from './PlaylistModel';
import { Alert } from 'react-native';

interface StoreFetchingPlaylistListProps {
  loading: boolean;
  playlists: PlaylistEntity[];
}

const StoreFetchingPlaylistList: React.FC<StoreFetchingPlaylistListProps> = ({
  loading,
  playlists,
}) => {
  return (
    <LoadingAndErrors errors={[]} loading={loading}>
      <PlaylistWithBottomSheetList playlists={playlists} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingPlaylistList;
