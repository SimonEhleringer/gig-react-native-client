import React, { useEffect } from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import SongEntity from './SongEntity';
import SongWithBottomSheetList from './SongWithBottomSheetList';

interface StoreFetchingSongListProps {
  loading: boolean;
  songs: SongEntity[];
}

const StoreFetchingSongList: React.FC<StoreFetchingSongListProps> = ({
  loading,
  songs,
}) => {
  return (
    <LoadingAndErrors errors={[]} loading={loading}>
      <SongWithBottomSheetList songs={songs} />
    </LoadingAndErrors>
  );
};

export default StoreFetchingSongList;
