import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Container from '../../common/Container';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import Paper from '../../common/Paper';
import GetSongBpmSongModel from './GetSongBpmSongModel';
import GetSongBpmSong from './GetSongBpmSong';
import { ListItem } from 'react-native-elements';
import { TouchableHighlightBase, TouchableWithoutFeedback } from 'react-native';
import PaddingView from '../../common/PaddingView';

interface GetSongBpmSongListProps {
  getSongBpmSongs: GetSongBpmSongModel[];
  loading: boolean;
  errors: string[];
  handleSongPress: (id: string) => void;
  handleDummySongPress: () => void;
}

const GetSongBpmSongList: React.FC<GetSongBpmSongListProps> = ({
  getSongBpmSongs,
  loading,
  errors,
  handleSongPress,
  handleDummySongPress,
}) => {
  return (
    <>
      <LoadingAndErrors loading={loading} errors={errors}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={getSongBpmSongs}
          renderItem={(item) => (
            <GetSongBpmSong
              key={item.item.id}
              getSongBpmSong={item.item}
              isFirstItem={item.index === 0}
              isLastItem={item.index === getSongBpmSongs.length - 1}
              handleSongPress={() => handleSongPress(item.item.id)}
            />
          )}
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
