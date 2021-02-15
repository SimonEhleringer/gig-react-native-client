import React from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PlaylistList from './PlaylistList';
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
      <PlaylistList playlists={playlists} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingPlaylistList;
