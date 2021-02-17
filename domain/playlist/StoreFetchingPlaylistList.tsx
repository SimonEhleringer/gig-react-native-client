import React from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PlaylistWithBottomSheetList from './PlaylistWithBottomSheetList';
import PlaylistEntity from './PlaylistModel';

interface StoreFetchingPlaylistListProps {
  loading: boolean;
  errors: string[];
  playlists: PlaylistEntity[];
}

const StoreFetchingPlaylistList: React.FC<StoreFetchingPlaylistListProps> = ({
  loading,
  errors,
  playlists,
}) => {
  return (
    <LoadingAndErrors errors={errors} loading={loading}>
      <PlaylistWithBottomSheetList playlists={playlists} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingPlaylistList;
