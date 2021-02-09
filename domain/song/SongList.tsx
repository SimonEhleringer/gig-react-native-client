import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../common/Container';
import Paper from '../common/Paper';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';
import LoadingAndErrors from '../common/LoadingAndErrors';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  View,
} from 'react-native';
import { PADDING } from '../../config/themes';
import PaddingView from '../common/PaddingView';

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

  return (
    <LoadingAndErrors loading={loading} errors={errors}>
      <FlatList
        keyExtractor={(item) => item.songId}
        data={songs}
        renderItem={renderItem}
        ListFooterComponent={<PaddingView />}
        ListHeaderComponent={<PaddingView />}
      />
    </LoadingAndErrors>
  );
};

export default SongList;
