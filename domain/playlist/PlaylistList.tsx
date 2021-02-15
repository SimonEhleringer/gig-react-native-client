import React from 'react';
import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import PaddingView from '../common/PaddingView';
import PlaylistContainer from './PlaylistContainer';
import PlaylistEntity from './PlaylistModel';

interface PlaylistListProps {
  playlists: PlaylistEntity[];
}

const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  const renderItem = (item: ListRenderItemInfo<PlaylistEntity>) => {
    return (
      <PlaylistContainer
        playlist={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === playlists.length - 1}
      />
    );
  };

  // const getItemLayout = (data: any, index: any) => ({
  //   length: SONG_HEIGHT,
  //   offset: SONG_HEIGHT * index,
  //   index,
  // });

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
      // getItemLayout={getItemLayout}
    />
  );
};

export default PlaylistList;
