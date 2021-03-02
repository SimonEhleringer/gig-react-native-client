import React from 'react';
import { ListRenderItemInfo, TouchableWithoutFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LoadingAndErrors from '../../../common/LoadingAndErrors';
import PaddingView from '../../../common/PaddingView';
import Paper from '../../../common/Paper';
import AddPlaylistSongContainer from './AddPlaylistSongContainer';
import SongEntity from '../../../song/SongEntity';
import { getItemLayout } from '../../../common/shared';

interface AddPlaylistSongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
  handleDummySongPress: () => void;
}

const AddPlaylistSongList: React.FC<AddPlaylistSongListProps> = ({
  songs,
  loading,
  errors,
  handleDummySongPress,
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
        getItemLayout={getItemLayout}
        ListFooterComponent={<PaddingView />}
        ListHeaderComponent={
          <>
            <PaddingView />
            <Paper>
              <ListItem
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={handleDummySongPress}
                Component={TouchableWithoutFeedback}
              >
                <ListItem.Content>
                  <ListItem.Title>Neuen Song erstellen</ListItem.Title>
                  <ListItem.Subtitle>
                    Fügt einen ganz neuen Song zur Playlist hinzu
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </Paper>
            <PaddingView />
          </>
        }
        // getItemLayout={getItemLayout}
      />
    </LoadingAndErrors>
  );
};

export default AddPlaylistSongList;
