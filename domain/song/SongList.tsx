import React, { RefObject } from 'react';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';
import LoadingAndErrors from '../common/LoadingAndErrors';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import PaddingView from '../common/PaddingView';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BORDER_RADIUS } from '../../config/themes';
import { ListItem } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const SONG_HEIGHT = 73.14286041259766;

interface SongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
}

const SongList: React.FC<SongListProps> = ({ songs, loading, errors }) => {
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
    <LoadingAndErrors loading={loading} errors={errors}>
      <FlatList
        keyExtractor={keyExtractor}
        data={songs}
        renderItem={renderItem}
        ListFooterComponent={<PaddingView />}
        ListHeaderComponent={<PaddingView />}
        getItemLayout={getItemLayout}
      />
    </LoadingAndErrors>
  );
};

export default SongList;
