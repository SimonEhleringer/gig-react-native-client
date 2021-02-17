import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import PaddingView from '../common/PaddingView';
import PlaylistSongContainer from './PlaylistSongContainer';
import SongEntity from './SongEntity';

interface PlaylistSongListProps {
  songs: SongEntity[];
}

const PlaylistSongList: React.FC<PlaylistSongListProps> = ({ songs }) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <PlaylistSongContainer
        song={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === songs.length - 1}
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
    <FlatList
      keyExtractor={keyExtractor}
      data={songs}
      renderItem={renderItem}
      ListFooterComponent={<PaddingView />}
      ListHeaderComponent={<PaddingView />}
      // getItemLayout={getItemLayout}
    />
  );
};

export default PlaylistSongList;
