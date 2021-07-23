import React from 'react';
import { ListRenderItemInfo, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import PaddingView from '../../common/PaddingView';
import Paper from '../../common/Paper';
import { getItemLayout } from '../../common/shared';
import GetSongBpmSong from './GetSongBpmSong';
import GetSongBpmSongModel from './GetSongBpmSongModel';

interface GetSongBpmSongListProps {
  getSongBpmSongs: GetSongBpmSongModel[];
  loading: boolean;
  handleSongPress: (id: string) => void;
  handleDummySongPress: () => void;
  handleVisitGetSongBpmPress: () => void;
}

const GetSongBpmSongList: React.FC<GetSongBpmSongListProps> = ({
  getSongBpmSongs,
  loading,
  handleSongPress,
  handleDummySongPress,
  handleVisitGetSongBpmPress,
}) => {
  const renderItem = (item: ListRenderItemInfo<GetSongBpmSongModel>) => {
    return (
      <GetSongBpmSong
        key={item.item.id}
        getSongBpmSong={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === getSongBpmSongs.length - 1}
        handleSongPress={() => handleSongPress(item.item.id)}
      />
    );
  };

  return (
    <>
      <LoadingAndErrors loading={loading} errors={[]}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={getSongBpmSongs}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyboardShouldPersistTaps='always'
          ListHeaderComponent={
            <>
              <PaddingView />

              <Paper>
                <ListItem
                  onPress={handleVisitGetSongBpmPress}
                  Component={TouchableHighlight}
                >
                  <ListItem.Content>
                    <ListItem.Title>GetSongBPM besuchen</ListItem.Title>
                    <ListItem.Subtitle>
                      Die größte BPM Datenbank der Welt
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </Paper>

              <PaddingView />
              <Paper>
                <ListItem
                  onPress={handleDummySongPress}
                  Component={TouchableHighlight}
                >
                  <ListItem.Content>
                    <ListItem.Title>Ohne Song fortfahren</ListItem.Title>
                    <ListItem.Subtitle>
                      Lässt dich einen ganz eigenen Song erstellen
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </Paper>
              <PaddingView />
            </>
          }
          ListFooterComponent={<PaddingView />}
        />
      </LoadingAndErrors>
    </>
  );
};

export default GetSongBpmSongList;
