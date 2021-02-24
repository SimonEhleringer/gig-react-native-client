import React, { useEffect } from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import SongEntity from './SongEntity';
import SongWithBottomSheetList from './SongWithBottomSheetList';

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
      <SongWithBottomSheetList songs={songs} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingSongList;
