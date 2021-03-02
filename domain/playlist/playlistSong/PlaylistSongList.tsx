import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import PaddingView from '../../common/PaddingView';
import PlaylistSongContainer from './PlaylistSongContainer';
import SongEntity from '../../song/SongEntity';
import { getItemLayout } from '../../common/shared';

interface PlaylistSongListProps {
  songs: SongEntity[];
  loading: boolean;
}

const PlaylistSongList: React.FC<PlaylistSongListProps> = ({
  songs,
  loading,
}) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <PlaylistSongContainer
        song={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === songs.length - 1}
        index={item.index}
      />
    );
  };

  const keyExtractor = (item: SongEntity) => {
    return item.songId;
  };

  return (
    <LoadingAndErrors loading={loading} errors={[]}>
      <FlatList
        keyExtractor={keyExtractor}
        data={songs}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ListFooterComponent={<PaddingView />}
        ListHeaderComponent={<PaddingView />}
      />
    </LoadingAndErrors>
  );
};

export default PlaylistSongList;
