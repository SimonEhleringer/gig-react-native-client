import React from 'react';
import {
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
    <ScrollView
      style={{ backgroundColor: 'transparent' }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Paper hasMarginBottom>
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

        <LoadingAndErrors loading={loading} errors={errors}>
          {getSongBpmSongs.length > 0 && (
            <Paper>
              {getSongBpmSongs.map((song, index) => {
                return (
                  <GetSongBpmSong
                    key={song.id}
                    getSongBpmSong={song}
                    hasBottomDivider={index !== getSongBpmSongs.length - 1}
                    handleSongPress={() => handleSongPress(song.id)}
                  />
                );
              })}
            </Paper>
          )}
        </LoadingAndErrors>
      </Container>
    </ScrollView>
  );
};

export default GetSongBpmSongList;
