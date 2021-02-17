import React from 'react';
import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import PaddingView from '../common/PaddingView';
import PlaylistEntity from './PlaylistModel';
import PlaylistWithBottomSheetContainer from './PlaylistWithBottomSheetContainer';

interface PlaylistListProps {
  playlists: PlaylistEntity[];
}

const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  const renderItem = (item: ListRenderItemInfo<PlaylistEntity>) => {
    return (
      <PlaylistWithBottomSheetContainer
        playlist={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === playlists.length - 1}
      />
    );
  };

  const keyExtractor = (item: PlaylistEntity) => {
    return item.playlistId;
  };

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={playlists}
      renderItem={renderItem}
      ListFooterComponent={<PaddingView />}
      ListHeaderComponent={<PaddingView />}
    />
  );
};

export default PlaylistList;
