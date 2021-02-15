import React, { RefObject } from 'react';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';
import { FlatList, ListRenderItemInfo } from 'react-native';
import PaddingView from '../common/PaddingView';

const SONG_HEIGHT = 73.14286041259766;

interface SongListProps {
  songs: SongEntity[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <SongContainer
        song={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === songs.length - 1}
      />
    );
  };

  const getItemLayout = (data: any, index: any) => ({
    length: SONG_HEIGHT,
    offset: SONG_HEIGHT * index,
    index,
  });

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
      getItemLayout={getItemLayout}
    />
  );
};

export default SongList;
