import React from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import SongEntity from './SongEntity';
import SongList from './SongList';

interface StoreFetchingSongListProps {
  loading: boolean;
  errors: string[];
  songs: SongEntity[];
}

const StoreFetchingSongList: React.FC<StoreFetchingSongListProps> = ({
  loading,
  errors,
  songs,
}) => {
  return (
    <LoadingAndErrors errors={errors} loading={loading}>
      <SongList songs={songs} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingSongList;
