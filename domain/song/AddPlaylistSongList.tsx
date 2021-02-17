import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PaddingView from '../common/PaddingView';
import AddPlaylistSongContainer from './AddPlaylistSongContainer';
import SongEntity from './SongEntity';

interface AddPlaylistSongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
}

const AddPlaylistSongList: React.FC<AddPlaylistSongListProps> = ({
  songs,
  loading,
  errors,
}) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <AddPlaylistSongContainer
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

export default AddPlaylistSongList;
