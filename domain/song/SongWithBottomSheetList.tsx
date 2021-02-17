import React from 'react';
import SongEntity from './SongEntity';
import { FlatList, ListRenderItemInfo } from 'react-native';
import PaddingView from '../common/PaddingView';
import SongWithBottomSheetContainer from './SongWithBottomSheetContainer';

const SONG_HEIGHT = 73.14286041259766;

interface SongWithBottomSheetListProps {
  songs: SongEntity[];
}

const SongWithBottomSheetList: React.FC<SongWithBottomSheetListProps> = ({
  songs,
}) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <SongWithBottomSheetContainer
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

export default SongWithBottomSheetList;
