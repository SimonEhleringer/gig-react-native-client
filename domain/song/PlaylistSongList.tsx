import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PaddingView from '../common/PaddingView';
import PlaylistSongContainer from './PlaylistSongContainer';
import SongEntity from './SongEntity';

interface PlaylistSongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
}

const PlaylistSongList: React.FC<PlaylistSongListProps> = ({
  songs,
  loading,
  errors,
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

  // const getItemLayout = (data: any, index: any) => ({
  //   length: SONG_HEIGHT,
  //   offset: SONG_HEIGHT * index,
  //   index,
  // });

  const keyExtractor = (item: SongEntity) => {
    return item.songId;
  };

  return (
    <LoadingAndErrors loading={loading} errors={errors}>
      <FlatList
        keyExtractor={keyExtractor}
        data={songs}
        renderItem={renderItem}
        ListFooterComponent={<PaddingView />}
        ListHeaderComponent={<PaddingView />}
        // getItemLayout={getItemLayout}
      />
    </LoadingAndErrors>
  );
};

export default PlaylistSongList;
